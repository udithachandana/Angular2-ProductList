import { NgModule } from "@angular/core";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';


@NgModule({
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        MatTableModule
    ],
    exports: [
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        MatTableModule
    ],
})
export class AngularMaterial {

}