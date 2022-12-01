import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MakeUpComponent } from './make-up/make-up.component';
import { AddProduitComponent } from './add-produit/add-produit.component';
import { UpdateProduitMakeUpComponent } from './update-produit-make-up/update-produit-make-up.component';
const routes: Routes = [
  {path: "makeUp", component : MakeUpComponent},
  {path: "add-produit", component : AddProduitComponent},
  {path: "updateMakeUp/:reference", component: UpdateProduitMakeUpComponent},
  { path: "", redirectTo: "MakeUp", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
