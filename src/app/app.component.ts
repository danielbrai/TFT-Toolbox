import { GeradorIconesService } from './shared/services/gerador-icones.service';
import { CONSTANTS } from './shared/constants';
import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tft-toolbox';

  executouNavegacao = false;

  constructor(private geradorIcones: GeradorIconesService){
    this.geradorIcones.execute();
  }

  navegou(){
    console.log('executando no app')
    this.executouNavegacao = true;
  }
}
