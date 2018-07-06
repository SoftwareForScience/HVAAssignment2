import { Component, OnInit } from '@angular/core';
import { DarkModeHandlerService } from '../dark-mode-handler.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isDarkActivated : boolean = true;
  constructor(private darkModeService : DarkModeHandlerService) { }

  ngOnInit() {
  }

   openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

 closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

changeColor(){
  this.isDarkActivated = !this.isDarkActivated;
  this.darkModeService.setDarkMode(this.isDarkActivated);
}

}
