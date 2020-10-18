import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list-top/shopping-list/shopping-list.component';
import { ShoppingListTopComponent } from './shopping-list-top/shopping-list-top.component';
import { ShoppingListEditComponent } from './shopping-list-top/shopping-list-edit/shopping-list-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListTopComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
