// Update with your config settings.
require("dotenv").config();

module.exports = {

  client: 'pg',
  connection: process.env.DB_URL || {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: process.env.SSL,
  },
  pool: {
    min: 2,
    max: 10
  },
}


