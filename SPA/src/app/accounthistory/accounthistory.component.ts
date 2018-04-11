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

 import { AccounthistoryService } from '../accounthistory.service';


@Component({
  selector: 'app-accounthistory',
  templateUrl: './accounthistory.component.html',
  styleUrls: ['./accounthistory.component.css']
})
export class AccounthistoryComponent implements OnInit {

  constructor(private accounthistoryService: AccounthistoryService,  private activatedRoute: ActivatedRoute) { }
  products: any[];
  msg: any; 
  msgStatus: any;
  display : boolean;
  signupDate: any;
  zipcode: any;
  env_var: any;

  ngOnInit() {
  }



 // Call the Function getAccountHistory 
GetAccountHistory(email:string): void{ 
  this.clearResults(); 
  this.env_var = this.queryparams();
  this.accounthistoryService.getAccountHistory(email,this.env_var)
        .subscribe(products =>{ this.products = products , 
                                this.msgStatus= products.AccountHistoryOut.transactionStatus.status,
                                this.signupDate= products.AccountHistoryOut.userAccount.signupDate,
                                this.zipcode= products.AccountHistoryOut.userAccount.postalCode} ,
                               error => this.msg =  error);
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

  // Function to clear the result
    public clearResults(): void {
    this.products = [];
    this.msgStatus=[];
    this.display = false;
    this.msg=[];
  }



}
