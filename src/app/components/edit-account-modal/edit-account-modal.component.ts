/**
* This is a test on how the standalone components work in the current application,
* and to start making core components to be standalone from this point forward.
*/

import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';

import { IonicModule } from '@ionic/angular';
import {
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Account } from 'src/app/pages/add-account/add-account.page';


export enum ModalResponse {
  Confirm = "confirm",
  Cancel = "cancel"
}

@Component({
  selector: 'app-edit-account-modal',
  templateUrl: './edit-account-modal.component.html',
  styleUrls: ['./edit-account-modal.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    IonicModule,

  ],
})
export class EditAccountModalComponent  implements OnInit {
  queryParams!: FormGroup;

  @Input() selectedComponent!: Account;


  constructor(

    private modalController: ModalController,
    private formBuilder: FormBuilder,
  ) { }


  ngOnInit() {
    console.log("From the call " + JSON.stringify(this.selectedComponent));
    this.buildForm(this.selectedComponent);
  }


  cancel() {
    return this.modalController.dismiss(null, ModalResponse.Cancel);
  }


  confirm() {
    const formVal: Account = this.queryParams.getRawValue();
    return this.modalController.dismiss(formVal , ModalResponse.Confirm);
  }


  buildForm(item?: Account) {
    this.queryParams = this.formBuilder.group({
      accountId: [item ? item!.accountId : ''],
      name: [item ? item!.name : '', Validators.required],
      currentBalance: [item ? item.currentBalance : '', Validators.required],
      description: [item ? item.description : '']
    })
  }
}
