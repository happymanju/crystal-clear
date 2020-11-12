require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const axios = require("axios");
const db = require("./knex.js");
const { Pool, Client } = require("pg");

async function fetchTaps(coordinate) {
  const url =
    "https://my-mizu-dev2-gen8n.ondigitalocean.app/dev-api/search/radius";
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
    params: coordinate,
  };

  try {
    const taps = await axios.get(url, options).then((res) => res.data.taps);
    const tapsCategory = taps.map((tap) => tap.category_id);
    return tapsCategory;
  } catch (err) {
    console.error(err);
  }
}

app.get("/express/taps", async (req, res) => {
  const { days } = req.query;
  const connectionString = process.env.DB_URL;
  const pool = new Pool({
    connectionString,
  });
  const result = await pool
    .query(
      `SELECT COUNT(*) FROM taps WHERE created_at >= (CURRENT_DATE - '${days} days'::INTERVAL )`
    )
    .then((res) => res.rows)
    .catch((err) => console.error(err));
  pool.end();
  res.send(result);
});

app.get("/express/leaderboard", async (req, res) => {
  const result = await db.select().table("refills");
  const recList = {};
  result.forEach((record) => {
    if (Object.keys(recList).includes(record.user_id)) {
      recList[record.user_id] += Number(record.amount) / 1000;
    } else {
      recList[record.user_id] = Number(record.amount) / 1000;
    }
  });
  const rankList = Object.entries(recList).sort(([, a], [, b]) => b - a);
  res.send(rankList.slice(0, 9));
});

app.get("/express/radius", async (req, res) => {
  const query = req.query;
  let coordinate = {};
  for (let key in query) {
    coordinate[key] = Number(query[key]);
  }
  const result = await fetchTaps(coordinate);
  res.send(result);
})

app.get("/googleLoc", async (req, res) => {
  const location = req.query.query;
  const result = await axios.get(
    "https://www.meteoblue.com/de/server/search/query3",
    {
      params: {
        query: location
      },
    }
  ).catch(err => console.error("google api error", err));
  res.send(result.data);
})
app.get("/express/radius", async (req, res) => {
  const query = req.query;
  let coordinate = {};
  for (let key in query) {
    coordinate[key] = Number(query[key]);
  }
  const result = await fetchTaps(coordinate);
  res.send(result);
});


app.use(express.static(path.join(__dirname, "..", "dist")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
});

module.exports = app;
