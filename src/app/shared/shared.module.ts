import { ListByCategoryComponent } from './../itens/list-by-category/list-by-category.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { CardsMenuComponent } from './components/cards-menu/cards-menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { ItensHomeComponent } from '../itens/home/itens-home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CardsMenuComponent, MenuComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    RouterModule.forChild([
      { path: 'itens', component: ItensHomeComponent },
      { path: 'category', component: ListByCategoryComponent }
    ])
  ],
  exports: [HeaderComponent, CardsMenuComponent, MenuComponent]
})
export class SharedModule { }
