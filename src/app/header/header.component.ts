import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  darkMode = true;
  headlines = [
    'Front End developer',
    'Team player',
    'Sports enthusiast',
    'Code lover',
  ];
  showHeadline = true;
  currentLine = 0;

  ngOnInit() {
    this.updateLine();
  }

  updateLine() {
    setInterval(() => {
      this.currentLine++;
      this.currentLine = this.currentLine % this.headlines.length;
      this.showHeadline = false;

      setTimeout(() => {
        this.showHeadline = true;
      }, 1);
    }, 4500);
  }
}
