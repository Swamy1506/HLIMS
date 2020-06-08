import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { retry, catchError } from 'rxjs/operators';
@Injectable()
export class LoanService {

    private serverUrl = environment.endpoints.api;

    // Http Headers
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
        observe: 'response'
    };

    constructor(private http: HttpClient) { }

    saveLoan(borrowerinfo: any): Observable<any> {
        const body = JSON.stringify(borrowerinfo);
        return this.http.post(this.serverUrl + 'Loan/SaveLoan', body, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            }), observe: 'response'
        });
    }
    getAllLoans(): Observable<any> {
        return this.http.get(this.serverUrl + 'Loan/GetAllLoans', { observe: 'response' }).pipe(
            retry(1),
            catchError(this.errorHandl)
        );
    }

    getAllProperties(): Observable<any> {
        return this.http.get(this.serverUrl + 'Property/GetAllProperties', { observe: 'response' }).pipe(
            retry(1),
            catchError(this.errorHandl)
        );
    }

    // Error handling
    errorHandl(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}

