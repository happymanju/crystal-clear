// Update with your config settings.
require("dotenv").config();

module.exports = {
  client: 'pg',
  connection: {
    host: process.env.LOCAL_HOST,
    port: process.env.LOCAL_PORT,
    user: process.env.LOCAL_USERNAME,
    password: process.env.LOCAL_PASSWORD,
    database: process.env.LOCAL_NAME,
  },
  //   ||
  // {
  //   host: process.env.DB_HOST,
  //   port: process.env.DB_PORT,
  //   user: process.env.DB_USERNAME,
  //   password: process.env.DB_PASSWORD,
  //   database: process.env.DB_NAME,
  //   ssl: process.env.SSL,
  // },
  pool: {
    min: 2,
    max: 10
  },
}


