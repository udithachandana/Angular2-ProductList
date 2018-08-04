import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "../shared/app.product.service";
import { HttpClient } from "@angular/common/http";

@Component({
  templateUrl: './app.product-list.component.html',
  selector: 'product-list'
})
export class ProductListComponent implements OnInit {
  searchKey: string;
  products: IProduct[];
  productUrl : string = 'http://localhost:4200/assets/products.json';
  productDetailsUrl : string = 'https://api.flickr.com/services/rest/?api_key=b96968309b6cca777d2bc55a7e11fbda&method=flickr.cameras.getBrandModels&brand=Canon';

  constructor(private _productService: ProductService, private http: HttpClient) {
    console.log("constructor started");
    this.searchKey = "A";
  }

  filteredProducts: IProduct[];

  searchProducts = function (): void {
    if (this.searchKey) {
      this.filteredProducts = this.products.filter((product: IProduct) => {
        if (product.name.toLocaleLowerCase().indexOf(this.searchKey.toLocaleLowerCase()) > -1) {
          return product;
        }
      });
    }
    else {
      this.filteredProducts = this.products;
    }
  }

  onNotifyLikeStatus = function (data: number[]): void {
    this.filteredProducts = this.products.map((product: IProduct) => {
      if (product.id === data[0]) {
        product.rating = data[1];
      }
      return product;
    });

  }

  onComplete(): void {
    console.log('complete');
  };

  ngOnInit(): void {
    console.log("Init started");

    this._productService.getProducts().subscribe(
      (response : IProduct[] )=> {
        this.products = response;
        this.filteredProducts = this.products;
      },
      error => console.log(error)
    );
  }
}