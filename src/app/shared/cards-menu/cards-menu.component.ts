import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards-menu',
  templateUrl: './cards-menu.component.html',
  styleUrls: ['./cards-menu.component.scss']
})
export class CardsMenuComponent implements OnInit {

  @Input()
  iconName: string;

  @Input()
  menuEntry: string;

  constructor() {

  }

  ngOnInit(): void {
  }

}
