import { Component, OnInit, Input } from '@angular/core';
import { GeradorIconesService } from '../services/gerador-icones.service';
import { ITENS_MENU } from 'src/config/itens-menu';
import { ControladorEventosService } from '../services/controlador-eventos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  estaNaTelaPrincipal = false;

  itensMenu = ITENS_MENU;

  constructor(private geradorIcones: GeradorIconesService, private data: ControladorEventosService){
  }

  ngOnInit(): void {
    this.geradorIcones.execute();
    this.data.currentMessage.subscribe(message => this.estaNaTelaPrincipal = message);
  }

}
