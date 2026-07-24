import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  message = '';

  show(message: string): void {
    this.message = message;
    console.log(message);
  }

}