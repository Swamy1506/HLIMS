import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BorrowerService } from 'src/app/services/borrower.service';

@Component({
  selector: 'app-borrower',
  templateUrl: './add-borrower.component.html',
  styleUrls: ['./add-borrower.component.scss']
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

    const borrowerInfo = this.borrowerForm.getRawValue();
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
