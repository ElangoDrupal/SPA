import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { FindinstoreComponent }   from './findinstore/findinstore.component';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';
import { OauthComponent} from './oauth/oauth.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { AccounthistoryComponent } from './accounthistory/accounthistory.component';


const routes: Routes = [
   /* { path: '', redirectTo: 'dashboard', pathMatch: 'full' },*/
	{ path: '', component: DashboardComponent },
	{ path: 'findinstore', component: FindinstoreComponent },
	{ path: 'oauth', component: OauthComponent},
	{ path: 'AddToCart', component: AddToCartComponent },
    { path: 'Accounthistory', component: AccounthistoryComponent },

	];

@NgModule({
  imports: [ RouterModule.forRoot(routes),AsyncLocalStorageModule ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
