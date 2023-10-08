import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public HeroNames: string[] = ['Spideman','Ironman','Hulk','She Hulk','Thor'];
  public deletedHero?: string;

  removeLastHero():void {
    this.deletedHero = this.HeroNames.pop();
  }
}
