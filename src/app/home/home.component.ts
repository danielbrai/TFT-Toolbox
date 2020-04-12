import { ITENS_MENU } from './../../config/itens-menu';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  navegou = false;

  estaNaTelaPrincipal = true;
  eventEmitter = new EventEmitter<boolean>();

  itensMenu = ITENS_MENU;

  ngOnInit(): void {
  }

  onNotify(){
    console.log('Emitindo no home');
    this.estaNaTelaPrincipal = !this.estaNaTelaPrincipal;
    this.eventEmitter.emit(this.estaNaTelaPrincipal);
  }
}
