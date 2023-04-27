import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { CustomerService } from '../service/customer.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-banker-auth',
  templateUrl: './banker-auth.component.html',
  styleUrls: ['./banker-auth.component.scss']
})
export class BankerAuthComponent {

  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  constructor(private router: Router, private customerService: CustomerService,private snackBar:MatSnackBar) {}

  canLogin() {
    return this.username.valid && this.password.valid;
  }

  login() {
    if (this.username.value === 'admin@cognizant.com' && this.password.value === 'admin') {
      this.snackBar.open("admin logged in sucessfully", 'close', {
        horizontalPosition: 'start',
        verticalPosition: 'top',
      })
      this.customerService.Customersubject.next({customerState:'bankerDashboard'})
      this.router.navigateByUrl('/dashboard');
    }
  }
}
