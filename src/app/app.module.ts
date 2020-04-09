import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component'
import { ItensHomeComponent } from './itens/home/itens-home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './home/menu/menu.component';
import { ItensModule } from './itens/itens.module';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    SharedModule,
    ItensModule,
    RouterModule.forRoot([
      { path: 'itens', component: ItensHomeComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
