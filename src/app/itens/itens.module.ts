import { HomeComponent } from './../home/home.component';
import { ItensHomeComponent } from './home/itens-home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [ItensHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: HomeComponent
    }])
  ],
  exports: [ItensHomeComponent]
})
export class ItensModule { }
