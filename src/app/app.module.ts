import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MakeUpComponent } from './make-up/make-up.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { FormsModule } from '@angular/forms';
import { UpdateProduitMakeUpComponent } from './update-produit-make-up/update-produit-make-up.component';

@NgModule({
  declarations: [
    AppComponent,
    MakeUpComponent,
    AddProduitComponent,
    UpdateProduitMakeUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
