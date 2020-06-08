import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBorrowersComponent } from './borrower/list-borrowers/list-borrowers.component';
import { BorrowerComponent } from './borrower/add-borrower/add-borrower.component';


const routes: Routes = [
  { path: 'add-borrower', component: BorrowerComponent },
  { path: 'view-borrowers', component: ListBorrowersComponent },
  { path: '', redirectTo: 'view-borrowers', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
