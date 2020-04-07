import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { LayoutComponent } from './layouts/main-layout/layout.component';
import { TopMenuComponent } from './menus/top-menu/top-menu.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [LayoutComponent, TopMenuComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    TranslateModule
  ]
})
export class MainModule { }
