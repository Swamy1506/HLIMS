import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  routes = [
    { urlLink: '/add-borrower', text: 'Add Borrower' },
    { urlLink: '/view-borrowers', text: 'Borrowers' },
    { urlLink: '/add-loan', text: 'Add Loan' },
    { urlLink: '/view-loans', text: 'View Loans' },
    { urlLink: '/add-property', text: 'Add Property' },
    { urlLink: '/view-properties', text: 'Properties' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
