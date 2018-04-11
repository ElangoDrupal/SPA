import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';


import { AppComponent } from './app.component';
import { FindinstoreComponent } from './findinstore/findinstore.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { FindinstoreService }       from './findinstore.service';
import { OauthService}    from './oauth.service';

import { CookieService } from 'ngx-cookie-service';
import { OauthComponent } from './oauth/oauth.component';

import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { SharedService } from './shared.service';
import { AccounthistoryComponent } from './accounthistory/accounthistory.component';

import { AccounthistoryService } from './accounthistory.service';


@NgModule({
  declarations: [
    AppComponent,
    FindinstoreComponent,
    DashboardComponent,
    OauthComponent,
    AddToCartComponent,
    AccounthistoryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
            
            
  ],
  providers: [FindinstoreService,OauthService,CookieService,SharedService,AccounthistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
