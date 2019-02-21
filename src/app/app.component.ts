import { Component } from '@angular/core';
import {MessageService} from './services/message/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of heroes';
  constructor(private messageService: MessageService) {
    // messageService.pushNotification$.subscribe(
    //   notif => {
    //     alert(notif);
    //   }
    // );
  }
  onDestroy() {
    // this.messageService.pushNotification$.unsubscribe();
  }

}
