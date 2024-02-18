import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAccountPageRoutingModule } from './add-account-routing.module';

import { AddAccountPage } from './add-account.page';
import { AddEditAccountComponent } from 'src/app/components/add-edit-account/add-edit-account.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAccountPageRoutingModule
  ],
  declarations: [
    AddAccountPage,
    AddEditAccountComponent,
  ]
})
export class AddAccountPageModule {}
