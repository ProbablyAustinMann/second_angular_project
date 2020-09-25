import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  allowNewUsername = false;
  username : string = '';
  usernameStatus : string = 'Username Added Successfully'

  constructor() { }

  ngOnInit(): void {
  }

  getUsername() {
  return this.username;
 }

 changeButtonWhenNotBlank() {
   if (this.username != '') {
     this.allowNewUsername = true;
   }
 }

 resetUsername() {
   this.username = '';
   this.allowNewUsername = false;
 }

}
