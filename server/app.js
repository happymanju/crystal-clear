require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const axios = require("axios");
const db = require("./knex.js");

async function fetchData() {
    const url = 'https://my-mizu-dev2-gen8n.ondigitalocean.app/dev-api/me';
    const options = {
        headers: {
            Authorization: `Bearer ${process.env.API_KEY}`
        }
    }

    await axios.get(url, options).then(data => console.log(data));
}


async function fetchDataPG() {
    const users = await db.select().table("users");
    console.log(users);
}

fetchDataPG();




app.use(express.static(path.join(__dirname, "..", "dist")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"))
})

module.exports = app;