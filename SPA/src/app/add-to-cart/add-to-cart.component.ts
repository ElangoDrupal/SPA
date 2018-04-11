import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Subscription } from "rxjs/Rx";
import {URLSearchParams} from "@angular/http";
import { ActivatedRoute } from '@angular/router';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  constructor(private sService:SharedService, private activatedRoute: ActivatedRoute) { }

  data: any[];

  products: any[];
  msg: any; 
  err: any;
  display : boolean;
  env_var: any;

  ngOnInit() {}

myFunction():void {
  this.clearResults(); 
  this.env_var = this.queryparams();
  this.sService.fetchCharacters(this.env_var).subscribe(
      data => { this.data = data},
      err => { this.msg = err }
    );
    this.display = true;


}

   public queryparams(): void {
      //let params_url = new URLSearchParams(window.location.search);
      //console.log(params_url);
      //let someParam = params_url.get('id');
      //console.log(someParam);

       let params = this.activatedRoute.snapshot.queryParams;
       return params.env;
  }

     public clearResults(): void {
    this.data = [];
    this.display = false;
    this.msg=[];
  }
}
