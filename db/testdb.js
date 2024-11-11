require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
    connectionString: `postgresql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}/${process.env.DATABASE}`,
    ssl: {
        rejectUnauthorized: false, 
      },
});

async function testDatabase() {
  try {
    await client.connect();
    console.log('Connected to the database');

    // Query the messages table
    const res = await client.query('SELECT * FROM messages');
    console.log('Messages:', res.rows);

  } catch (err) {
    console.error('Error testing database:', err);
  } finally {
    await client.end();
    console.log('Database connection closed');
  }
}

testDatabase();