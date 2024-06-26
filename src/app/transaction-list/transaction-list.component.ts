import { Component, OnInit } from '@angular/core';
import { TransactionService, Transaction } from '../transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[];

  constructor(private transactionService: TransactionService, private router: Router) { }

  ngOnInit() {
    this.transactions = this.transactionService.getTransactions();
  }

  viewTransaction(id: number) {
    this.router.navigate(['/transaction', id]);
  }
}
