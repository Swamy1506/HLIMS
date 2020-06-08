import { Component } from '@angular/core';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hlims-client';

  accessToken: string;

  constructor(private adalService: MsAdalAngular6Service) {
    debugger;
  }

  login(): void {
    this.adalService.login();
  }

  logout(): void {
    this.adalService.logout();
  }

  getLoggedInUser(): any {
    return this.adalService.LoggedInUserEmail;
  }

  getAccessToken(): Observable<any> {
    return this.adalService.acquireToken('https://localhost:44378/api/');
  }

  getToken(): string {
    return this.adalService.accessToken;
  }
}
