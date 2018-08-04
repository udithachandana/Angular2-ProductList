import { Injectable } from "@angular/core";
import { IProduct } from "../productList/product";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map, tap, filter } from 'rxjs/operators/';
import { IBrand } from "./brand";
import { ICamera } from "./camera";

@Injectable()
export class BrandService {

    productUrl: string = 'https://api.flickr.com/services/rest/?api_key=b96968309b6cca777d2bc55a7e11fbda&method=flickr.cameras.getBrands&format=json&nojsoncallback=?';
    cameraUrl: string = 'https://api.flickr.com/services/rest/?api_key=b96968309b6cca777d2bc55a7e11fbda&method=flickr.cameras.getBrandModels&format=json&nojsoncallback=?';

    constructor(private _http: HttpClient) {

    }

    getBrands(): Observable<IBrand[]> {
        return this._http.get<IBrand[]>(this.productUrl)
            .pipe(
            map(data => data['brands'].brand)
            );
    }

    getCameras(brand: string): Observable<ICamera[]> {
        return this._http.get<ICamera[]>(this.cameraUrl + '&brand=' + brand)
            .pipe(
            map(data => data['cameras'].camera)
            );
    }
}