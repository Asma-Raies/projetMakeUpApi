import { Injectable } from '@angular/core';
import { makeUp } from './model/makeUp.model';
@Injectable({
  providedIn: 'root'
})
export class MakeUpService {
makeUp : makeUp[];
make! : makeUp ;
  constructor() {
      { this.makeUp=[
        {referenceMakeUp :100 , nomMakeUp: "mascara" , prixMakeUp : 18.500 , marqueMakeUp : "chanel", quantiteMakeUp :50},
        {referenceMakeUp: 101 , nomMakeUp :"eyeliner" ,prixMakeUp : 26.850 , marqueMakeUp : "KIKO",quantiteMakeUp :20 },
        {referenceMakeUp : 102 , nomMakeUp :"palette", prixMakeUp : 75.000 , marqueMakeUp : "MakeUpForever",quantiteMakeUp :15 },
        {referenceMakeUp : 103 , nomMakeUp :"Rouge à lévres", prixMakeUp : 55.000 , marqueMakeUp : "Sephora",quantiteMakeUp :40 },
        {referenceMakeUp : 102 , nomMakeUp :"Fond de teint", prixMakeUp : 175.000 , marqueMakeUp : "MakeUpForever",quantiteMakeUp :55 },
        {referenceMakeUp : 102 , nomMakeUp :"Blush", prixMakeUp : 85.000 , marqueMakeUp : "KiKo",quantiteMakeUp :30 }
      ];
    }
    
   }
   listeMakeUp():makeUp[]{
    return this.makeUp;


   }
   ajouterProduitsMakeUP(prod : makeUp){
    this.makeUp.push(prod);
   }
   supprimerMakeUp(m: makeUp)
   {
     const index = this.makeUp.indexOf(m, 0);
     if (index > -1) {
     this.makeUp.splice(index, 1);
    
     }

   }
   consulterProduit(reference:number): makeUp{
    this.make = this.makeUp.find (m => m.referenceMakeUp == reference)!;
    return this.make;
    }
    updateMakeUp(m :makeUp){
      this.supprimerMakeUp(m);
      this.ajouterProduitsMakeUP(m);
    }
   
}
