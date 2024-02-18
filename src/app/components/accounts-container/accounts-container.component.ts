import { Component, Input, OnInit } from '@angular/core';
import { Account } from 'src/app/pages/add-account/add-account.page';

@Component({
  selector: 'app-accounts-container',
  templateUrl: './accounts-container.component.html',
  styleUrls: ['./accounts-container.component.scss'],
})
export class AccountsContainerComponent  implements OnInit {

    accounts: Array<Account> = [
    {
      accountId: 1,
      currentBalance: 1200,
      name: "checking",
      description: "asdf"
    },
    {
      accountId: 2,
      currentBalance: 1300,
      name: "Bank",
      description: "asdf"
    },
    {
      accountId: 3,
      currentBalance: 1500,
      name: "Saving School",
      description: "asdf"
    },
    {
      accountId: 4,
      currentBalance: 1600,
      name: "Saving home",
      description: "asdf"
    },
    {
      accountId: 5,
      currentBalance: 140,
      name: "cash",
      description: "asdf"
    }

  ];


  constructor() { }

  ngOnInit() {}

}
