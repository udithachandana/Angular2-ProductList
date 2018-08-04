import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AngularMaterial } from './angular-material.module';

import { AppComponent } from './app.component';
import { ProductListComponent } from './productList/app.product-list.component';
import { FieldCharReplacorPipe } from './shared/fieldCharReplacor.pipe';
import { StarRatingComponent } from './shared/star-rating.component';
import { ProductService } from './shared/app.product.service';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrandListComponent } from './brandsList/brand-list.component';
import { BrandService } from './shared/app.brand.service';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    FieldCharReplacorPipe,
    StarRatingComponent,
    BrandListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterial,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule ,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: 'products', component: ProductListComponent},
      { path: 'brands', component: BrandListComponent},
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ])
  ],
  providers: [
    ProductService,
    BrandService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
