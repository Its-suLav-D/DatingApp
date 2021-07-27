import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  model: any = {};

  @Output() cancelRegister = new EventEmitter();
  constructor(private accountService: AccountService, private toastr: ToastrService) {}

  ngOnInit(): void {}

  submitForm() {
    this.accountService.registerUser(this.model).subscribe(
      (user) => {
        console.log(user);
        this.cancel();
      },
      (error) => {
        this.toastr.error(error.error)
        console.log(error);
      }
    );
  }
  cancel() {
    this.cancelRegister.emit(false);
  }
}
