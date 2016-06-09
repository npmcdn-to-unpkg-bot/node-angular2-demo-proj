
import {Injectable, EventEmitter} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

import {Message} from './message';

@Injectable()
export class MessageService {
            messages: Message[]  = [];
            messageIsEdited = new EventEmitter<Message>();

            messageUrl = 'http://localhost:3000/message';
            headers = new Headers({'Content-Type': 'application/json'})

            constructor(private _http: Http) { }


            getMessages() {
                return this._http.get(this.messageUrl)
                    .map(response => { 
                                            const data = response.json().obj;
                                            let objs: any[] = [];
                                            data.forEach(function(obj) {
                                                let message = new Message(obj.content, obj._id, 'AJAXFakeUser', null);
                                                objs.push(message);  
                                            });
                                            console.log(objs);
                                            return objs;
                                     });
            }
            
            addMessage(message : Message) {
                return this._http.post(this.messageUrl, JSON.stringify(message), {headers: this.headers})
                    .map(response => {  const data = response.json().obj; 
                                         let message = new Message(data.content, data._id, 'AJAXFakeUser12', null);
                                        return message;
                    
                  
                  });

            }

            deleteMessage(message: Message) {
                this.messages.splice(this.messages.indexOf(message), 1);
            }

            editMessage(message: Message) {
                // this.messages[this.messages.indexOf(message)] = new Message('Edited', null, 'KDDJ');
                // message = new Message ('Edited', message.messageId, 'KDDJ', null);
                // return this._http.put(this.messageUrl + '/' + message.messageId, JSON.stringify(message), {headers: this.headers})
                //     .map(response => {  const data = response.json().obj; 
                //                          let message = new Message(data.content, data._id, 'AJAXFakeUser12', null);
                //                         return message;

                this.messageIsEdited.emit(message);
           
                // });
             }
}