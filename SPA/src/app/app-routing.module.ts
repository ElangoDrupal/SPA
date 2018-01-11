import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { FindinstoreComponent }   from './findinstore/findinstore.component';


const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'findinstore', component: FindinstoreComponent }
	];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
