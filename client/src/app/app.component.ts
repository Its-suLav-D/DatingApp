import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Mangisr';
  // This is too early to fetch data, because we have to let the component load first so, we use NgOnIT
  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }

  // getUsers() {
  //   // Observables are lazy, unless somebody subscribes to them.
  //   this.http.get('https://localhost:5001/api/users').subscribe(
  //     (response) => {
  //       console.log(response);
  //       this.users = response;
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
}
