import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  newUser = false;
  checkUser = 'No user is created';
  user = '';
  newUserName : string = ''
  isShowing = false

  constructor () {
    this.newUserName
    setTimeout(() => {
this.newUser = true;
    }, 5000)
  }

  changeUserStatus() {
    this.isShowing = true
    this.checkUser = 'User created';
  }

  onUpdateUser(event: Event){
    this.user = (event.target as HTMLInputElement).value
    console.log(this.user)
  }
}
