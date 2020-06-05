import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BorrowerComponent } from './borrower/borrower/borrower.component';


const routes: Routes = [
  { path: 'add-borrower', component: BorrowerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
