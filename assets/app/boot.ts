///<reference path="../../typings.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router';

import { AppComponent } from "./app.component";
import {MessageService} from './messages/message.service';

bootstrap(AppComponent, [MessageService, ROUTER_PROVIDERS]);