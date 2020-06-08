import { Component, OnInit } from '@angular/core';
import { BorrowerService } from 'src/app/services/borrower.service';

@Component({
  selector: 'app-list-borrowers',
  templateUrl: './list-borrowers.component.html',
  styleUrls: ['./list-borrowers.component.scss']
})
export class ListBorrowersComponent implements OnInit {

  borrowers = [];
  constructor(private borrowerService: BorrowerService) { }

  ngOnInit() {
    this.getAllBorrowers();
  }

  getAllBorrowers() {
    this.borrowerService.getAllBorrowers().subscribe(res => {
      this.borrowers = res.body;
    });
  }


}
