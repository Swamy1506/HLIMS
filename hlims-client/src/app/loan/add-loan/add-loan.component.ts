import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/services/borrower.service';
import { LoanService } from 'src/app/services/loan.service';

@Component({
  selector: 'app-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.scss']
})
export class LoanComponent implements OnInit {

  // loan form
  loanForm: FormGroup;

  banks = [
    { id: 1, name: 'SBI' },
    { id: 2, name: 'HDFC' },
    { id: 3, name: 'ICICI' },
  ];

  properties = [];
  borrowers = [];

  constructor(private fb: FormBuilder, private loanService: LoanService, private borrowerService: BorrowerService) { }

  // lifecycle hook
  ngOnInit() {

    this.intiBorrowerForm();

    this.getAllProperties();

    this.getAllBorrowers();

  }

  // intialixe rective form
  intiBorrowerForm() {
    this.loanForm = this.fb.group({
      id: [0],
      orginalAmount: ['', Validators.required],
      orginalTenure: ['', Validators.required],
      propertyId: ['', Validators.required],
      bankId: ['', Validators.required],
      remainingAmount: [''],
      remainingTenure: [''],
    });
  }

  /**
   * method to save borrower info
   *
   */
  saveLoan() {

    const loanInfo = this.loanForm.getRawValue();
    if (loanInfo) {
      this.loanService.saveLoan(loanInfo).subscribe(res => {
        if (res.body > 0) {
          console.log('Loan created successfully');
        }
      });
    }

  }

  getAllProperties() {
    this.loanService.getAllProperties().subscribe(res => {
      debugger;
      if (res.body) {
        this.properties = res.body;
      }
    });

  }

  getAllBorrowers() {
    this.borrowerService.getAllBorrowers().subscribe(res => {
      this.borrowers = res.body;
    });
  }

}
