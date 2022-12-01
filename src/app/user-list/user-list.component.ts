import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: [
    ".custom{color:#c43ee4}"
  ]
})
export class UserListComponent {
  title: string = 'Get Input Box';
  displayVal: string='';
  getVal(val:string) {
    console.log(val)
    this.displayVal=val
  }
}
