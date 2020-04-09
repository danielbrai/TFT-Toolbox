import { ITENS_MENU } from './../../../config/itens-menu';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  itensMenu = ITENS_MENU;

  ngOnInit(): void {
  }
}
