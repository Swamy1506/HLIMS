import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListBorrowersComponent } from './borrower/list-borrowers/list-borrowers.component';
import { BorrowerComponent } from './borrower/add-borrower/add-borrower.component';
import { ViewLoansComponent } from './loan/list-loans/list-loans.component';
import { LoanComponent } from './loan/add-loan/add-loan.component';
import { ADAuthGuard } from './authentication/authGuards/authGurd.service';

const routes: Routes = [
  { path: 'add-borrower', component: BorrowerComponent },
  { path: 'view-borrowers', component: ListBorrowersComponent, canActivate: [ADAuthGuard] },
  { path: 'add-loan', component: LoanComponent },
  { path: 'view-loans', component: ViewLoansComponent },
  { path: '', redirectTo: 'view-borrowers', pathMatch: 'full', canActivate: [ADAuthGuard] },
];


export const routedAppComponents = [BorrowerComponent, ListBorrowersComponent, LoanComponent, ViewLoansComponent];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
