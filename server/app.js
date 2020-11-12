require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const axios = require("axios");
const db = require("./knex.js");

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

// async function fetchTapsPG() {
//   const taps = await db.select().table("users");
//   console.log(taps);
// }

// (async () => {
//   try {
//     const res = await db.select().table("taps");
//     console.log(res);
//   } catch (err) {
//     console.error(err);
//   }
// })();

// const { Pool, Client } = require("pg");
// const connectionString = process.env.DB_URL;
// const pool = new Pool({
//   connectionString,
// });
// pool.query(
//   "SELECT * FROM taps WHERE created_at >= (CURRENT_DATE - '7 days'::INTERVAL )",
//   (err, res) => {
//     console.log(err, res.rows);
//     pool.end();
//   }
// );

// const client = new Client({
//   connectionString,
// });
// client.connect();
// client.query("SELECT * FROM users", (err, res) => {
//   console.log(err, res);
//   client.end();
// });

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
  console.log(rankList);
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
});

app.get("/api/hello", (req, res) => {
  res.send("jack");
});
app.use(express.static(path.join(__dirname, "..", "dist")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
});

module.exports = app;
