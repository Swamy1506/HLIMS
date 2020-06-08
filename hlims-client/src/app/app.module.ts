import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListBorrowersComponent } from './borrower/list-borrowers/list-borrowers.component';
import { BorrowerComponent } from './borrower/add-borrower/add-borrower.component';
import { HttpClientModule } from '@angular/common/http';
import { BorrowerService } from './services/borrower.service';
import { CommonModule } from '@angular/common';
import { LoanService } from './services/loan.service';

@NgModule({
  declarations: [
    AppComponent,
    BorrowerComponent,
    SideNavComponent,
    ListBorrowersComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [BorrowerService, LoanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
