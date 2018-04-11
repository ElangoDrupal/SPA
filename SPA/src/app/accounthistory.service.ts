
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
export class AccounthistoryService {

 constructor(private _httpclient: HttpClient, private cookieService: CookieService,  @Inject(DOCUMENT) private document) { 
    this.ap = document.location.protocol + '//'+ document.location.hostname + ':'+ document.location.port;
    this.hostname=document.location.hostname;
    this.protocol=document.location.hostname;
  }
    ap;
    hostname;
    protocol;
    app;

  getAccountHistory(email:string, env_var:string) : Observable<any> {
  
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
     let url =   'https://'+this.app+'/v1/profiles/admin/accounthistory';
    


  let accessToken = sessionStorage.getItem('Token');
  accessToken = "Bearer" + " " +accessToken;
  

  let headers  = new HttpHeaders()
              .set ('Authorization' , accessToken)
              .set ('Content-Type', 'application/json');

 let content = JSON.stringify( {
     "userAccount": 
         {
             "email": email
             
         }    
 });

  return this._httpclient.post<any>(url,content,{headers})
}

}
