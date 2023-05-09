import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent {
  showInfo = false;
  showMusic = false;
  
  toggleInfo() {
    this.showInfo = !this.showInfo;
  }
  

  toggleMusic() {
    this.showMusic =!this.showMusic;
  }
}
