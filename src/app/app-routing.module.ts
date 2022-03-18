import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompAComponent } from './pages/comp-a/comp-a.component';
import { CompBComponent } from './pages/comp-b/comp-b.component';

const routes: Routes = [
  {
    path: "compA",
    component: CompAComponent
  },
  {
    path: "compB",
    component: CompBComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
