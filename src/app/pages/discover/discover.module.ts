import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscoverRoutingModule } from './discover-routing.module';
import { DiscoverComponent } from './discover.component';
import { BannerPerPageModule } from 'src/app/shared/banner-per-page/banner-per-page.module';


@NgModule({
  declarations: [
    DiscoverComponent
  ],
  imports: [
    CommonModule,
    DiscoverRoutingModule,
    BannerPerPageModule
  ]
})
export class DiscoverModule { }
