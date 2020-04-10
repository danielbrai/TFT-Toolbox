import { HomeComponent } from './../home/home.component';
import { ItensHomeComponent } from './home/itens-home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [ItensHomeComponent, MenuComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: HomeComponent
    }])
  ],
  exports: [ItensHomeComponent]
})
export class ItensModule { }
