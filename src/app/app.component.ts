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

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer){
    iconRegistry.addSvgIcon(CONSTANTS.icons.itens.name, sanitizer.bypassSecurityTrustResourceUrl(CONSTANTS.icons.itens.path));
    iconRegistry.addSvgIcon(CONSTANTS.icons.champions.name, sanitizer.bypassSecurityTrustResourceUrl(CONSTANTS.icons.champions.path));
    iconRegistry.addSvgIcon(CONSTANTS.icons.formation.name, sanitizer.bypassSecurityTrustResourceUrl(CONSTANTS.icons.formation.path));
    iconRegistry.addSvgIcon(CONSTANTS.icons.updates.name, sanitizer.bypassSecurityTrustResourceUrl(CONSTANTS.icons.updates.path));
    iconRegistry.addSvgIcon(CONSTANTS.icons.statistics.name, sanitizer.bypassSecurityTrustResourceUrl(CONSTANTS.icons.statistics.path));
  }
}
