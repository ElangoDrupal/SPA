import { Component, OnInit } from '@angular/core';
//import { Product } from '../product';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';
//import { FormGroup, FormControl, validators } from '@angular/forms';
import { FormGroup, FormControl, FormArray, NgForm } from '@angular/forms';
//import {WebStorageModule, LocalStorageService} from "angular-localstorage";
import { CookieService } from 'ngx-cookie-service';
import { Subscription } from "rxjs/Rx";
import {URLSearchParams} from "@angular/http";
import { ActivatedRoute } from '@angular/router';
import { Router, Params } from '@angular/router';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

 import { FindinstoreService } from '../findinstore.service';

@Component({
  selector: 'app-findinstore',
  templateUrl: './findinstore.component.html',
  styleUrls: ['./findinstore.component.css']
})
export class FindinstoreComponent implements OnInit {
  private sampleFindinStoreForm: FormGroup;

  ngOnInit() {
    this.sampleFindinStoreForm = new FormGroup({
       'skuid' : new FormControl()
    })

  }
  constructor(private findinstoreService: FindinstoreService,  private activatedRoute: ActivatedRoute) { }
  products: any[];
  msg: any; 
  display : boolean;
  env_var: any;
  
// save hader function is switched to oauth module
//  SaveHeaders(Authorization:string) {
//   this.findinstoreService.SaveHeaders(Authorization);
//}
//

  public queryparams(): void {
      //let params_url = new URLSearchParams(window.location.search);
      //console.log(params_url);
      //let someParam = params_url.get('id');
      //console.log(someParam);

       let params = this.activatedRoute.snapshot.queryParams;
       return params.env;
  }


GetProducts(skuid:string, zipcode:string, radius: string): void{ 
  this.clearResults(); 
  this.env_var = this.queryparams();

  this.findinstoreService.getProducts(skuid,zipcode,radius,this.env_var)
        .subscribe(products =>{ this.products = products} ,
                     error => this.msg =  error);
    this.display = true;
     }

    public clearResults(): void {
    this.products = [];
    this.display = false;
    this.msg=[];
  }

  PrintsampleFindinStoreForm() {
  console.log(this.sampleFindinStoreForm);
}

}
