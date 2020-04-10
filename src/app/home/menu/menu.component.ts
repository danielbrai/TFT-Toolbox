import { ControladorEventosService } from './../../shared/services/controlador-eventos.service';
import { ITENS_MENU } from './../../../config/itens-menu';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  itensMenu = ITENS_MENU;

  navegou = false;

  constructor(private data: ControladorEventosService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.navegou = message);
  }

  onClicou(){
    this.data.executar(true);
  }


}
