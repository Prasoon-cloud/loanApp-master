import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BankerAuthComponent } from './banker-auth/banker-auth.component';
import { CustomerAuthComponent } from './customer-auth/customer-auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { UpdatePaymentStatusComponent } from './update-payment-status/update-payment-status.component';
import { PullMonthlyPaymentCollectionListComponent } from './pull-monthly-payment-collection-list/pull-monthly-payment-collection-list.component';
import { DefaulterReportComponent } from './defaulter-report/defaulter-report.component';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoanTypeComponent } from './loan-type/loan-type.component';
import { NewLoanComponent } from './new-loan/new-loan.component';
import { FormsModule } from '@angular/forms';
import { LoanDashboardComponent } from './loan-dashboard/loan-dashboard.component';
import { EditLoanComponent } from './edit-loan/edit-loan.component';
import { PullLoanComponent } from './pull-loan/pull-loan.component';
import { LoanInfoComponent } from './loan-info/loan-info.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MyLoanComponent } from './my-loan/my-loan.component';
import { AddDebtComponent } from './add-debt/add-debt.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoanByDateStatusComponent } from './loan-by-date-status/loan-by-date-status.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BankerAuthComponent,
    CustomerAuthComponent,
    DashboardComponent,
    EditCustomerComponent,
    CustomerDashboardComponent,
    UpdatePaymentStatusComponent,
    PullMonthlyPaymentCollectionListComponent,
    DefaulterReportComponent,
    LoanTypeComponent,
    NewLoanComponent,
    LoanDashboardComponent,
    EditLoanComponent,
    PullLoanComponent,
    LoanInfoComponent,
    HomepageComponent,
    MyLoanComponent,
    AddDebtComponent,
    LoanByDateStatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatTableModule,
    MatToolbarModule,
    FormsModule,
    MatSnackBarModule,
    MatMenuModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
