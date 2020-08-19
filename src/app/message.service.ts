import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// This is a message service needed for company.service.ts 
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
