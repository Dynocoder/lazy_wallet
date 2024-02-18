import { Component, OnInit } from '@angular/core';


export interface Account {
  accountId: number,
  currentBalance: number,
  name: string,
  description: string,
  color?: string
}

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.page.html',
  styleUrls: ['./add-account.page.scss'],
})
export class AddAccountPage implements OnInit {



  MapConstructor() { }

  ngOnInit(): void {
  }




}
