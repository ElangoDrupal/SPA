import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-findinstore',
  templateUrl: './findinstore.component.html',
  styleUrls: ['./findinstore.component.css']
})
export class FindinstoreComponent implements OnInit {

  constructor() { }
  products: Product[];
  ngOnInit() {
  }
  GetProducts(sku:string, zip:number, radius: number): void{  
    this.products = [{id:1,name:'product1'}, {id:1,name:'product2'},{id:1,name:'product3'}] ;
    // todo:write a code to call the api and assign the results to products.
  }
    public clearResults(): void {
    
    this.products= null;
  }


}
