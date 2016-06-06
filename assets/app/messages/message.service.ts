
import {Injectable} from '@angular/core';

import {Message} from './message';

@Injectable()
export class MessageService {
            messages  = [ new Message('test content', null, 'AK'),
                          new Message('sparta content', null, 'Maks') 
                        ]

            getMessages() {
                console.log(this.messages)
                return this.messages;
            }

}