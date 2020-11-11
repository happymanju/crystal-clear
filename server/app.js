require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const axios = require("axios");
const db = require("./knex.js");

async function fetchData() {
    const url = 'https://my-mizu-dev2-gen8n.ondigitalocean.app/dev-api/search/radius';
    const options = {
        headers: {
            Authorization: `Bearer ${process.env.API_KEY}`
        },
        params: { longitude: 139.7394763, latitude: 35.6728567, radius: 2000 }
    }

    try {
        const taps = await axios.get(url, options).then(res => res.data.taps);
        const tapsCategory = taps.map((tap) => tap.category_id);
        return tapsCategory;
    } catch (err) {
        console.error(err);
    }

}

const taps = fetchData();



// async function fetchDataPG() {
//     const users = await db.select().table("users");
//     console.log(users);
// }



app.get("/express/radius", async (req, res) => {
    const query = req.query;
    const testCoordinates = { longitude: 139.73655447363853, latitude: 35.671812626599866, radius: 500 }
    const fetchURL = "https://my-mizu-dev2-gen8n.ondigitalocean.app/dev-api/search/radius";

    const result = await fetchData();
    console.log(result)

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