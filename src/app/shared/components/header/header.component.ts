import { Component, OnInit } from '@angular/core';
import { ITENS_MENU } from 'src/config/itens-menu';
import { GeradorIconesService } from '../../services/gerador-icones.service';
import { ControladorEventosService } from '../../services/controlador-eventos.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  estaNaTelaPrincipal = false;

  itensMenu = ITENS_MENU;

  constructor(private geradorIcones: GeradorIconesService, private data: ControladorEventosService) {
  }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.estaNaTelaPrincipal = message);
  }

}
