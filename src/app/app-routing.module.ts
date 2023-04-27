import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankerAuthComponent } from './banker-auth/banker-auth.component';
import { CustomerAuthComponent } from './customer-auth/customer-auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefaulterReportComponent } from './defaulter-report/defaulter-report.component';
import { PullMonthlyPaymentCollectionListComponent } from './pull-monthly-payment-collection-list/pull-monthly-payment-collection-list.component';
import { UpdatePaymentStatusComponent } from './update-payment-status/update-payment-status.component';
import { LoanTypeComponent } from './loan-type/loan-type.component';
import { NewLoanComponent } from './new-loan/new-loan.component';
import { LoanDashboardComponent } from './loan-dashboard/loan-dashboard.component';
import { PullLoanComponent } from './pull-loan/pull-loan.component';
import { LoanInfoComponent } from './loan-info/loan-info.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MyLoanComponent } from './my-loan/my-loan.component';
import { AddDebtComponent } from './add-debt/add-debt.component';
import { LoanByDateStatusComponent } from './loan-by-date-status/loan-by-date-status.component';

const routes: Routes = [
  {
    component: BankerAuthComponent,
    path: 'banker-auth',
  },
  {
    component: CustomerAuthComponent,
    path: 'customer-auth',
  },
  {
    component: DashboardComponent,
    path: 'dashboard',
  },
  {
    component: CustomerDashboardComponent,
    path: 'customer_dashboard',
  },
  {
    component: DefaulterReportComponent,
    path: 'defaulter-list',
  },
  {
    component: PullMonthlyPaymentCollectionListComponent,
    path: 'pull-monthly',
  },
  {
    component: UpdatePaymentStatusComponent,
    path: 'update-payment',
  },
  {
    path: 'loan-type',
    component: LoanTypeComponent,
  },
  {
    path: 'new-loan',
    component: NewLoanComponent,
  },
  {
    path: 'loan-dashboard',
    component: LoanDashboardComponent,
  },
  {
    path: 'pull-loan',
    component: PullLoanComponent,
  },
  {
    path: 'loan-info',
    component: LoanInfoComponent,
  },
  {
    path: 'my-loan',
    component: MyLoanComponent,
  },
  {
    path: 'add-debt',
    component: AddDebtComponent,
  },
  {
    path: 'loan-dateStatus',
    component: LoanByDateStatusComponent,
  },
  {
    path: '',
    component: HomepageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
