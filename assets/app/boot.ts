///<reference path="../../typings.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router';
import {provide} from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { AppComponent } from "./app.component";
import {MessageService} from './messages/message.service';

bootstrap(AppComponent, [ROUTER_PROVIDERS, MessageService, provide(LocationStrategy, { useClass: HashLocationStrategy })]);