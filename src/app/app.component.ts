import { Component } from '@angular/core';
import { DarkModeHandlerService } from './dark-mode-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  isDarkActivated : boolean;

  constructor(private darkModeService : DarkModeHandlerService){
    darkModeService.subject.subscribe(value => {
      this.isDarkActivated = value;
    }) ;
  }
}


