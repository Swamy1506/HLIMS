import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';

@Injectable()

export class ADAuthGuard implements CanActivate {
    constructor(private adalService: MsAdalAngular6Service) { }

    canActivate() {
        if (!this.adalService.isAuthenticated) {
            this.adalService.login();
        } else {
            return true;
        }
    }
}