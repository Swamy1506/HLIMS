import { Component, OnInit } from '@angular/core';
import { BorrowerService } from 'src/app/services/borrower.service';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-list-loans',
  templateUrl: './list-loans.component.html',
  styleUrls: ['./list-loans.component.scss']
})
export class ViewLoansComponent implements OnInit {

  loans = [];
  constructor(private loanService: LoanService) { }

  ngOnInit() {

    this.getAllLoans();
  }

  getAllLoans() {
    this.loanService.getAllLoans().subscribe(res => {
      this.loans = res.body;
    });
  }


}
