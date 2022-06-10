import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  hover: boolean = false;
  @Input() project: any;

  constructor(public router: Router) {}

  ngOnInit(): void {}

  openLink(path) {
    window.open(path, '_blank');
  }
}
