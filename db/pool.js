const { Pool } = require("pg");
require('dotenv').config();

module.exports = new Pool({
  // host: process.env.HOST,
  // password: process.env.PASSWORD,
  // user: process.env.USER,
  // database: process.env.DB,
  // port: process.env.PORT||5432,
  // ssl: {
  //   rejectUnauthorized: false,
  // }
  connectionString: `postgresql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}/${process.env.DATABASE}`,
    ssl: {
        rejectUnauthorized: false, 
      },
});