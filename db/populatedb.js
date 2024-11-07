const { Client } = require("pg");
require('dotenv').config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  username VARCHAR ( 255 ),
  text VARCHAR ( 255 )
);

INSERT INTO messages (username, text)
VALUES 
  ('Vlad', 'Chinazes'),
  ('Dasha', 'Realy?');
`

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}/${process.env.DATABASE}`,
    ssl: {
      rejectUnauthorized: false, 
    },
  });

  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();