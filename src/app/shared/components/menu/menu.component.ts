import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ControladorEventosService } from '../../services/controlador-eventos.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input()
  itensMenu;

  navegou = false;

  constructor(private data: ControladorEventosService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.navegou = message);
  }

  onClicou(){
    this.data.executar(true);
  }
}
