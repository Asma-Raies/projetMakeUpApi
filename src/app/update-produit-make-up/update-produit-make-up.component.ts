import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { MakeUpService } from '../make-up.service';
import { makeUp } from '../model/makeUp.model';
@Component({
  selector: 'app-update-produit-make-up',
  templateUrl: './update-produit-make-up.component.html',
  styles: [
  ]
})
export class UpdateProduitMakeUpComponent implements OnInit {
  currentProduit = new makeUp();
  constructor(private activatedRoute : ActivatedRoute,
              private router : Router,
             private MakeUpService : MakeUpService) { }

  ngOnInit(): void {   
     this.currentProduit =this.MakeUpService.consulterProduit(this.activatedRoute.snapshot.params['reference']);
  //console.log(this.currentProduit);
  }
  updateMakeUp()
  { //console.log(this.currentProduit);
  this.MakeUpService.updateMakeUp(this.currentProduit);
  this.router.navigate(['makeUp']);
  }
}
