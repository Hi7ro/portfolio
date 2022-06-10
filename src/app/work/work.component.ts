import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
})
export class WorkComponent implements OnInit {
  public types = [
    { name: 'All', active: true },
    { name: 'HTML/CSS', active: false },
    { name: 'JavaScript', active: false },
    { name: 'Angular', active: false },
  ];

  public projects = [
    {
      name: 'Fotogallery',
      type: 'HTML/CSS',
      img: 'Fotogallerie.png',
      description: 'A simple Website based on HTML/CSS and a little JS',
      path: 'http://ringoffire.adderlynwindsor.com',
    },
    {
      name: 'Ring of Fire',
      type: 'Angular',
      img: 'ringoffire.jpg',
      description:
        'The pupular drinking game as multi-user-app based on Angular',
      path: 'http://ringoffire.adderlynwindsor.com',
    },
    {
      name: 'El Pollo Loco',
      type: 'JavaScript',
      img: 'pollo-loco.png',
      description: 'OOP jump-and-run game based on JavaScript',
      path: 'http://el-pollo-loco.adderlynwindsor.com',
    },
    {
      name: 'Portfolio',
      type: 'Angular',
      img: 'portfolio.png',
      description: 'Angular based Webpage',
      path: 'https://adderlynwindsor.com',
    },
    {
      name: 'Pokedex',
      type: 'JavaScript',
      img: 'Fotogallerie.png',
      description: 'JS-App, using Pokémon API',
      path: 'http://pokedex.adderlynwindsor.com',
    },
    {
      name: 'Join',
      type: 'JavaScrippt',
      img: 'join-responsive.png',
      description: 'A Kanban board based on JavaScript',
      path: 'http://join.adderlynwindsor.com',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  activate(i: number) {
    for (let index = 0; index < this.types.length; index++) {
      this.types[index].active = index == i;
    }
  }

  meetsSearchCriteria(i: number) {
    let activeType = this.types.find((type) => type.active);
    if (activeType.name == 'All') {
      return true;
    } else {
      return activeType.name == this.projects[i].type;
    }
  }
}
