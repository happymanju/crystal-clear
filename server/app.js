require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const axios = require("axios");
const db = require("./knex.js");

async function fetchTaps(coordinate) {
    const url = 'https://my-mizu-dev2-gen8n.ondigitalocean.app/dev-api/search/radius';
    const options = {
        headers: {
            Authorization: `Bearer ${process.env.API_KEY}`
        },
        params: coordinate,
    }

    try {
        const taps = await axios.get(url, options).then(res => res.data.taps);
        const tapsCategory = taps.map((tap) => tap.category_id);
        return tapsCategory;
    } catch (err) {
        console.error(err);
    }
}

// async function fetchTapsPG() {
//     const taps = await db.select().table("taps");
//     console.log(taps);
// };

// async () => {
//     try {
//         const res = await fetchTapsPG();
//     } catch (err) {
//         console.error(err);
//     }
// };

app.get("/express/radius", async (req, res) => {
    const query = req.query;
    let coordinate = {};
    for (let key in query) {
        coordinate[key] = Number(query[key]);
    }
    const result = await fetchTaps(coordinate);
    res.send(result);
})

app.get("/api/hello", (req, res) => {
    res.send("jack")
})
app.use(express.static(path.join(__dirname, "..", "dist")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"))
})

module.exports = app;