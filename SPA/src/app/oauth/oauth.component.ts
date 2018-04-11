import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { of } from 'rxjs/observable/of';
import { FormGroup, FormControl, FormArray, NgForm} from '@angular/forms';
//import { WebStorageModule, LocalStorageService} from "angular-localstorage";
import { Subscription } from "rxjs/Rx";
import {URLSearchParams} from "@angular/http";
import { ActivatedRoute } from '@angular/router';
import { Router, Params } from '@angular/router';


import {
	debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { OauthService} from '../oauth.service';

 @Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.css']
})

export class OauthComponent implements OnInit {


  constructor(private oauthService: OauthService, private activatedRoute: ActivatedRoute) { }
  oauthkey: any[];
  msg: any;
  display: boolean;
  env_var: any;


  SaveHeaders(Authorization:string) {
   this.oauthService.SaveHeaders(Authorization);
}


  GetHeader(clientid:string, secretkey:string) : void{
   this.env_var = this.queryparams();

  	this.oauthService.getHeader(clientid,secretkey,this.env_var)
  		.subscribe(oauthkey=>{ this.oauthkey = oauthkey},
  					error => this.msg= error);
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
    this.oauthkey = [];
    this.display = false;
    this.msg=[];
  }


  ngOnInit() {
  }

}

