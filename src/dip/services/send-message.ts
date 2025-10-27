import { SendMessageInterface } from './interfaces/send-message';

export default class SendMessage implements SendMessageInterface {
  sendMessage(msg: string) {
    console.log(msg);
  }
}
