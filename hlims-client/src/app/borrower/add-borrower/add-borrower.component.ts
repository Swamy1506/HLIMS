import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/services/borrower.service';

@Component({
  selector: 'app-borrower',
  templateUrl: './borrower.component.html',
  styleUrls: ['./borrower.component.scss']
})
export class BorrowerComponent implements OnInit {

  // borroewer form
  borrowerForm: FormGroup;

  constructor(private fb: FormBuilder, private borrowerService: BorrowerService) { }

  // lifecycle hook
  ngOnInit() {

    this.intiBorrowerForm();
  }

  // intialixe rective form
  intiBorrowerForm() {
    this.borrowerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: [''],
      gender: ['Male'],
      email: ['', Validators.required],
      phNumber: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  /**
   * method to save borrower info
   *
   */
  saveBorrower() {

    const borrowerInfo = this.borrowerForm.getRawValue();
    if (borrowerInfo) {
      console.log(borrowerInfo);
      this.borrowerService.saveBorrower(borrowerInfo).subscribe(res => {

      });
    }

  }
}
