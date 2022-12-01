import { Component, OnInit } from '@angular/core';
import { makeUp } from '../model/makeUp.model';
import { MakeUpService } from '../make-up.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
newMakeUp = new makeUp ();
message :string ="";

  constructor(
              private MakeUpService : MakeUpService) { }

  ngOnInit(): void {

  }
  addProduitMakeUP(){
    this.MakeUpService.ajouterProduitsMakeUP(this.newMakeUp);
    this.message = "Produits "+this.newMakeUp.nomMakeUp +" ajouté avec succés !" ;
  }

}
