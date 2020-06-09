import { Component, OnInit } from '@angular/core';
import { BorrowerService } from 'src/app/services/borrower.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {

  borrowers = [];
  propertyForm: FormGroup;

  constructor(private fb: FormBuilder, private borrowerService: BorrowerService, private propService: PropertyService) { }

  ngOnInit(): void {

    this.intiPropertyForm();

    this.getAllBorrowers();
  }

  intiPropertyForm() {
    this.propertyForm = this.fb.group({
      id: [0],
      address: ['', Validators.required],
      type: ['', Validators.required],
      borrowerId: ['', Validators.required],
    });
  }


  getAllBorrowers() {
    this.borrowerService.getAllBorrowers().subscribe(res => {
      this.borrowers = res.body;
    });
  }

  saveProperty() {
    const propInfo = this.propertyForm.getRawValue();
    if (propInfo) {
      this.propService.saveProperty(propInfo).subscribe(res => {
        if (res.body > 0) {
          console.log('Property created successfully');
        }
      });
    }

  }

}
