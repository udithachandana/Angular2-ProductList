import { Injectable } from "@angular/core";
import { IProduct } from "../productList/product";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map, tap, filter } from 'rxjs/operators/';

@Injectable()
export class ProductService {

    productUrl : string = 'http://localhost:4200/assets/products.json';

    constructor(private _http: HttpClient){

    }

    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this.productUrl)
        .pipe(
            map(data => {
            return data;
            })
        );
    }
}