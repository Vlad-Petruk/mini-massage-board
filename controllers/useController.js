const db = require("../db/queries")

const links = [
    { href: "/", text: "Home" },
    { href: "new", text: "New Message" },
    { href: "message", text: "Message details" }
];

async function getAllMessages (req, res) {
  const messages = await db.getMessages()
    res.render("index", { links: links, title: "Mini Messageboard", messages: messages});
}

async function getNewForm (req, res) {
    res.render("form");
}

async function getMessageById(req,res) {
    const messageId = req.params.messageId;
    const message = await db.getMessageById(messageId)
    if (message) {
        res.render("message", { links: links, message: message });
    } else {
        res.status(404).send("Message not found");
    }
}

async function createNewMessage (req, res) {
    const { text, author } = req.body;
    db.insertMessage(author, text)
    res.redirect("/")
}

module.exports = {
    getAllMessages,
    getNewForm,
    getMessageById,
    createNewMessage
}