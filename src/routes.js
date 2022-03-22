const {Router} = require('express');
const SendMessageController = require('./controller/sendMessageController');

const router = Router();

router.post('/send', SendMessageController.sendMessage);

module.exports = router;

