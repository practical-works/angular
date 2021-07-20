import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'amb-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.css']
})
export class ChampionComponent {
  @Input('obj') champion;
  @Output() remove = new EventEmitter();

  get championImageSrc() {
    const baseUrl = 'http://ddragon.leagueoflegends.com/cdn';
    const version = '9.20.1';
    const path = `img/champion/${this.champion.id}.png`;
    return `${baseUrl}/${version}/${path}`;
  }

  onChampionRemove() {
    this.remove.emit(this.champion);
  }
}
