const express = require('express');
const userController = require('../controllers/useController');

const router = express.Router();

const links = [
    { href: "/", text: "Home" },
    { href: "new", text: "New Massage" },
];

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];
  

router.get("/", (req, res) => {
    res.render("index", { links: links, title: "Mini Messageboard", messages: messages});
});

router.get("/new", (req, res)=> {
    res.render("form")
})

router.post('/new', (req, res) => {
    const { text, author } = req.body;
    messages.push({ text: text, user: author, added: new Date() });
    res.redirect("/")
})

module.exports = router;