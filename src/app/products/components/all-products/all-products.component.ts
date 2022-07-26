import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  products : any [] = [];
  constructor(private _ToastrService:ToastrService,private _ProductsService:ProductsService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  getAllProducts()
  {
    this._ProductsService.getAllProducts().subscribe((data:any)=>
    {
       console.log(data);
       this.products = data;
    });
  }

}
