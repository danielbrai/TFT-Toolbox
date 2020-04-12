import { LISTA_ICONES } from './../../../config/lista.icones';
import { ITENS_MENU } from 'src/config/itens-menu';
import { ItemMenu } from './../models/item-menu.model';
import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { CONSTANTS } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class GeradorIconesService {

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    LISTA_ICONES.forEach(item => {
      this.iconRegistry.addSvgIcon(item.name, this.sanitizer.bypassSecurityTrustResourceUrl(item.path));
    });
  }


}
