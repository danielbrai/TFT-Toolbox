import { ControladorEventosService } from './../../shared/services/controlador-eventos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itens-home',
  templateUrl: './itens-home.component.html',
  styleUrls: ['./itens-home.component.scss']
})
export class ItensHomeComponent implements OnInit {

  constructor(private data: ControladorEventosService) { }

  ngOnInit(): void {
  }

  onClick(){
    this.data.executar(false);
  }
}
