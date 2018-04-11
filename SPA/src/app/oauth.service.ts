
import { Injectable, Inject } from '@angular/core';
import {Http, Headers,Response, RequestOptions,URLSearchParams } from '@angular/http';
import { HttpClient, HttpHeaders ,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { catchError, map, tap } from 'rxjs/operators';
import { AsyncLocalStorage } from 'angular-async-local-storage';
import { CookieService } from 'ngx-cookie-service';
import {DOCUMENT} from '@angular/platform-browser';




@Injectable()
export class OauthService {

  constructor(private _httpclient: HttpClient, private cookieService: CookieService,  @Inject(DOCUMENT) private document) { 
    this.ap = document.location.protocol + '//'+ document.location.hostname + ':'+ document.location.port;
    this.hostname=document.location.hostname;
    this.protocol=document.location.hostname;
  }
    ap;
    hostname;
    protocol;
    app;

SaveHeaders(Authorization:string){  
let Token = Authorization;
sessionStorage.setItem( 'Token', Token);

}

 getHeader(clientid:string, secretkey:string, env_var:string) : Observable<any> {
  
     let environment = this.hostname.split('.').shift();

    switch(env_var) 
      { 
    
    // Stage
      case 'stage':
      this.app = 'stage-api-developer.sephora.com';
      break;

    // Qa
    case 'qa':
      this.app = 'vaq-r-qa-sdn.internalsephora.com';   
      break;
      
    // Dev
   case 'dev':  
      this.app = 'vaq-r-dev-sdn.internalsephora.com'; 
      break; 

    // Prod-no longer used 
    //case 'api-developer':  
    //  this.app = 'api-developer.sephora.com'; 
    //  break;
      
    //Default will call prod for the demo 2
    default:
      this.app = 'api-developer.sephora.com';  
    }


   //Url make up 
     let url =   'https://'+this.app+'/v1/oauth2/token';

   //attach the headers
     let headers  = new HttpHeaders()
              .set ('Accept', 'application/json');
          
        
   //attach the params
    let body = new HttpParams()
              .set('client_id',clientid)
              .set('client_secret',secretkey)
              .set('grant_type','client_credentials');

   // call the API end point 
 return this._httpclient.post<any>(url,body,{headers});
              			
  }

}