import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  sidebar = false;

  openSidebar() {
    if (!this.sidebar) {
      document.getElementById('mobile').classList.remove('d-none');
      this.sidebar = true;
    } else {
      this.closeSidebar();
    }
  }

  closeSidebar() {
    document.getElementById('mobile').classList.add('d-none');
    this.sidebar = false;
  }
}
