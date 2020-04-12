import { SharedModule } from './../shared/shared.module';
import { HomeComponent } from './../home/home.component';
import { ItensHomeComponent } from './home/itens-home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ListByCategoryComponent } from './list-by-category/list-by-category.component';
import { MatIconModule } from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [ItensHomeComponent, ListByCategoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '', component: HomeComponent
    }]),
    SharedModule,
    MatTabsModule,
    MatIconModule
  ],
  exports: [ItensHomeComponent]
})
export class ItensModule { }
