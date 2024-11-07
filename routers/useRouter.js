const express = require('express');
const userController = require('../controllers/useController');

const router = express.Router();

router.get("/", userController.getAllMessages);
router.get("/new", userController.getNewForm)
router.get('/message/:messageId', userController.getMessageById);
router.post('/new', userController.createNewMessage)

module.exports = router;