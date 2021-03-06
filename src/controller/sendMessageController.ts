import "dotenv/config";
import {Request, Response} from 'express';
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

export default {
  async sendMessage(req: Request, res: Response) {
    const {message, number} = req.body;
  
    try {
      const result = await client.messages
      .create({
        body: message,
        from: process.env.TWILIO_NUMBER,
        to: `+55${number}`
      })
  
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error)
      console.log(error)
    }
   
    res.status(200).send('Tudo certo!')
  }
}