import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routedAppComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListBorrowersComponent } from './borrower/list-borrowers/list-borrowers.component';
import { BorrowerComponent } from './borrower/add-borrower/add-borrower.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BorrowerService } from './services/borrower.service';
import { CommonModule } from '@angular/common';
import { LoanService } from './services/loan.service';
import { MsAdalAngular6Module } from 'microsoft-adal-angular6';
import { InsertAuthTokenInterceptor } from './authentication/interceptors/insert-auth-token-interceptor';
import { ADAuthGuard } from './authentication/authGuards/authGurd.service';

@NgModule({
  declarations: [
    AppComponent,
    BorrowerComponent,
    SideNavComponent,
    ListBorrowersComponent,
    routedAppComponents
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MsAdalAngular6Module.forRoot({
      tenant: 'b8cc1b6e-762a-4f0b-9a3f-d134b19d7a44',
      clientId: '6ae41d19-dca6-492d-b0ea-58dba7bd97a4',
      redirectUri: window.location.origin,
      endpoints: {
        'https://localhost:44378/api/': 'a32f0791-42d1-4bdb-8afc-b0db1fd82d75',
      },
      navigateToLoginRequestUrl: false,
      cacheLocation: 'sessionStorage'
    })
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InsertAuthTokenInterceptor, multi: true }, ADAuthGuard, BorrowerService, LoanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
