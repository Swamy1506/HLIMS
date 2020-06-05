import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BorrowerService {

    private serverUrl = environment.endpoints.api;

    constructor(private http: HttpClient) { }

    saveBorrower(borrowerinfo: any): Observable<any> {
        return this.http.post(this.serverUrl + 'Borrower/SaveBorrower', borrowerinfo, { observe: 'response' });
    }

    getAllBorrowers(): Observable<any> {
        return this.http.get(this.serverUrl + 'Borrower/GetAllBorrowers', { observe: 'response' });
    }
}

