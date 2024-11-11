const pool = require("./pool");

async function getMessages() {
    try {
        const { rows } = await pool.query("SELECT * FROM messages"); 
        return rows;
     } catch (err) {
        console.error("Error retrieving messages", err);
        throw err; 
     }
  
}

async function getMessageById(id) {
    try {
      const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
      if (rows.length === 0) {
        return null; 
      }
      return rows[0];
    } catch (err) {
      console.error("Error retrieving message by ID", err);
      throw err;
    }
  }

async function insertMessage(username, text) {
  await pool.query("INSERT INTO messages (username, text) VALUES ($1, $2)", [username, text]);
}

module.exports = {
    getMessages,
    insertMessage,
    getMessageById
}