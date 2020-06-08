import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/services/borrower.service';

@Component({
  selector: 'app-loan',
  templateUrl: './add-loan.component.html',
  styleUrls: ['./add-loan.component.scss']
})
export class LoanComponent implements OnInit {

  // borroewer form
  loanForm: FormGroup;

  constructor(private fb: FormBuilder, private borrowerService: BorrowerService) { }

  // lifecycle hook
  ngOnInit() {

    this.intiBorrowerForm();
  }

  // intialixe rective form
  intiBorrowerForm() {
    this.loanForm = this.fb.group({
      id: [0],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: [''],
      gender: ['Male'],
      email: ['', Validators.required],
      phNumber: ['', Validators.required],
      streetAddress: ['', Validators.required],
    });
  }

  /**
   * method to save borrower info
   *
   */
  saveBorrower() {

    const borrowerInfo = this.loanForm.getRawValue();
    borrowerInfo.phone = borrowerInfo.phNumber;
    borrowerInfo.properties = [];
    if (borrowerInfo) {
      console.log(borrowerInfo);
      this.borrowerService.saveBorrower(borrowerInfo).subscribe(res => {
        if (res.body > 0) {
          console.log('borrower created succssfully');
        }
      });
    }

  }
}
