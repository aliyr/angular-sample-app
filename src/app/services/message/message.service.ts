import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {Hero} from '../../models/hero';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];
  // public pushNotification$ = new Subject<any>();

  add (message: string): void {
    this.messages.push(message);
    // this.pushNotification$.next(message);
  }

  clear (): void {
    this.messages = [];
  }

  constructor() { }
}
