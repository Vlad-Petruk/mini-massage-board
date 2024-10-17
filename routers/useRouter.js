const express = require('express');
const userController = require('../controllers/useController');

const router = express.Router();

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
  

router.get("/", (req, res) => {
    res.render("index", { links: links, title: "Mini Messageboard", messages: messages});
});

router.get("/new", (req, res)=> {
    res.render("form")
})

router.get('/message/:messageId', (req, res) => {
  const messageId = req.params.messageId;
  const message = messages.find(msg => msg.added === messageId);
  if (message) {
    res.render("message", { links: links, message: message });
  } else {
    res.status(404).send("Message not found");
  }
});

router.post('/new', (req, res) => {
    const { text, author } = req.body;
    messages.push({ text: text, user: author, added: getDate()})
    res.redirect("/")
})

module.exports = router;