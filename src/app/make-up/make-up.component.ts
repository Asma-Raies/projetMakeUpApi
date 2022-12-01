import { Component, OnInit } from '@angular/core';
import {makeUp} from '../model/makeUp.model';
import { MakeUpService } from '../make-up.service';
@Component({
  selector: 'app-make-up',
  templateUrl: './make-up.component.html',
  styleUrls: ['./make-up.component.css']
})
export class MakeUpComponent implements OnInit {
 MakeUp : makeUp[];
  constructor(private MakeUpService : MakeUpService) {
    this.MakeUp =MakeUpService.listeMakeUp ();
  

   }

  ngOnInit(): void {
  }
  supprimerMakeUp(m: makeUp)
{
  let conf = confirm("Supprimer cette article de makeUp  ?");
   if (conf)
  this.MakeUpService.supprimerMakeUp(m);
}

}
