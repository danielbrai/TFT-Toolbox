import { GeradorIconesService } from './shared/services/gerador-icones.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tft-toolbox';

  executouNavegacao = false;

  constructor(private geradorIcones: GeradorIconesService){
  }

  navegou(){
    this.executouNavegacao = true;
  }
}
