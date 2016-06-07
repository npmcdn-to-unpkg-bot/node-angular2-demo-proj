
import {Injectable} from '@angular/core';

import {Message} from './message';

@Injectable()
export class MessageService {
            messages: Message[]  = [];

            getMessages() {
                console.log(this.messages)
                return this.messages;
            }
            
            addMessage(message : Message) {
                this.messages.push(message);

            }

            deleteMessage(message: Message) {
                this.messages.splice(this.messages.indexOf(message), 1);
            }

            editMessage(message: Message) {
                this.messages[this.messages.indexOf(message)] = new Message('Edited', null, 'KDDJ');
            }
}