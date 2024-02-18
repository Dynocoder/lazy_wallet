import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Account } from 'src/app/pages/add-account/add-account.page';
import { EditAccountModalComponent, ModalResponse } from '../edit-account-modal/edit-account-modal.component';

@Component({
  selector: 'app-accounts-container',
  templateUrl: './accounts-container.component.html',
  styleUrls: ['./accounts-container.component.scss'],
})
export class AccountsContainerComponent {

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


  constructor(
    private modalController: ModalController
  ) { }


  async openModal(item: Account) {
    const modal = await this.modalController.create({
      component: EditAccountModalComponent,
      componentProps: { selectedComponent: item }
    });

    await modal.present();

    modal.onWillDismiss().then((data) => {
      console.log("this is data" + JSON.stringify(data))
      if (data.role === ModalResponse.Confirm) {
        this.updateAccounts(data.data);
      }
    });
  }


  updateAccounts(data: Account) {
    this.accounts.forEach(item => {
      if (item.accountId === data.accountId) {
        item.name = data.name;
        item.currentBalance = data.currentBalance;
      }
    })
  }
}
