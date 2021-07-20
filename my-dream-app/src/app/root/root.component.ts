import { Component } from '@angular/core';
import champions from './champions';

@Component({
  selector: 'amb-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent {
  champions: any;

  constructor() {
    this.champions = Object.values(champions);
  }

  removeChampion(champion) {
    this.champions =
      this.champions.filter(c => c.name !== champion.name);
  }
}
