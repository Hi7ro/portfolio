import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-skillz',
  templateUrl: './skillz.component.html',
  styleUrls: ['./skillz.component.scss'],
})
export class SkillzComponent implements OnInit {
  showElement = false;

  constructor() {}

  ngOnInit() {
    AOS.init();
  }
}
