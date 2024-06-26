import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/transactions', pathMatch: 'full' },
  { path: 'transactions', component: TransactionListComponent },
  { path: 'transaction/:id', component: TransactionDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
