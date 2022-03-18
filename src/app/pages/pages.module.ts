import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompBComponent } from './comp-b/comp-b.component';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompService } from './comp-service';
import { CompAFilho01Component } from './comp-a/comp-a-filho01/comp-a-filho01.component';
import { CompAFilho02Component } from './comp-a/comp-a-filho02/comp-a-filho02.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    CompAComponent,
    CompBComponent,
    CompAFilho01Component,
    CompAFilho02Component
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    CompService
  ]
})
export class PagesModule { }
