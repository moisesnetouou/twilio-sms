import {Router} from 'express';
import SendMessageController from './controller/sendMessageController';

const router = Router();

router.post('/send', SendMessageController.sendMessage);

export {router};