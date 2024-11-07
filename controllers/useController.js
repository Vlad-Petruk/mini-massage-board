// const asyncHandler = require("express-async-handler");

const links = [
    { href: "/", text: "Home" },
    { href: "new", text: "New Message" },
    { href: "message", text: "Message details" }
];

function getDate () {
  return new Date().toLocaleString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit' 
  })
}

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: getDate()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: getDate()
    }
  ];

async function getAllMassages (req, res) {
    res.render("index", { links: links, title: "Mini Messageboard", messages: messages});
}

async function getNewForm (req, res) {
    res.render("form");
}

async function getMessageById(req,res) {
    const messageId = req.params.messageId;
    const message = messages.find(msg => msg.added === messageId);
    if (message) {
        res.render("message", { links: links, message: message });
    } else {
        res.status(404).send("Message not found");
    }
}

async function createNewMessage (req, res) {
    const { text, author } = req.body;
    messages.push({ text: text, user: author, added: getDate()})
    res.redirect("/")
}

module.exports = {
    getAllMassages,
    getNewForm,
    getMessageById,
    createNewMessage
}