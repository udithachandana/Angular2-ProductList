import { Component } from "@angular/core";
import { BrandService } from "../shared/app.brand.service";
import { OnInit } from "@angular/core";
import { IBrand } from "../shared/brand";
import { ICamera } from "../shared/camera";
import { FormControl } from "@angular/forms";

@Component({
    templateUrl: './brand-list.component.html'
})
export class BrandListComponent implements OnInit {
    currentBrand: FormControl = new FormControl();

    brands: IBrand[];
    cameras: ICamera[];
    displayedColumns: string[] = ['name', 'image'];
    constructor(private _BrandService: BrandService) {
        this.currentBrand.valueChanges.subscribe(item => {
            this.cameras = null;
            this._BrandService.getCameras(item)
            .subscribe((data : ICamera[]) => {
                this.cameras = data;
            });
        }); 
        this.currentBrand.setValue('Apple');
    }

    options = [
        {name: 'One'},
        {name: 'Two'},
        {name: 'Three'}
       ];

    ngOnInit(): void {
        this._BrandService.getBrands()
            .subscribe((data : IBrand[]) => {
                this.brands = data;
            });
    }
}