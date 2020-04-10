import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { CONSTANTS } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class GeradorIconesService {

  constructor(private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) { }

  execute() {
    this.iconRegistry.addSvgIcon(CONSTANTS.icons.itens.name, this.sanitizer.bypassSecurityTrustResourceUrl(CONSTANTS.icons.itens.path));
    this.iconRegistry.addSvgIcon(CONSTANTS.icons.champions.name, this.sanitizer.bypassSecurityTrustResourceUrl(CONSTANTS.icons.champions.path));
    this.iconRegistry.addSvgIcon(CONSTANTS.icons.formation.name, this.sanitizer.bypassSecurityTrustResourceUrl(CONSTANTS.icons.formation.path));
    this.iconRegistry.addSvgIcon(CONSTANTS.icons.updates.name, this.sanitizer.bypassSecurityTrustResourceUrl(CONSTANTS.icons.updates.path));
    this.iconRegistry.addSvgIcon(CONSTANTS.icons.statistics.name, this.sanitizer.bypassSecurityTrustResourceUrl(CONSTANTS.icons.statistics.path));
    this.iconRegistry.addSvgIcon(CONSTANTS.icons.back.name, this.sanitizer.bypassSecurityTrustResourceUrl(CONSTANTS.icons.back.path));
  }
}
