import { Component } from '@angular/core';

@Component({
  selector: 'app-music-bar',
  templateUrl: './music-bar.component.html',
  styleUrls: ['./music-bar.component.css']
})
export class MusicBarComponent {
  showMusic = false;

  toggleMusic() {
    this.showMusic =!this.showMusic;
  }
}
