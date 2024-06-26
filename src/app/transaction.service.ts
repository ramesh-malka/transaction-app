import { Injectable } from '@angular/core';

export interface Transaction {
  id: number;
  date: string;
  comments: string;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transactions: Transaction[] = [
    { id: 1, date: '01/10/2020', comments: 'Utility bill' },
    { id: 2, date: '15/10/2020', comments: '' }
  ];

  getTransactions(): Transaction[] {
    return this.transactions;
  }

  getTransactionById(id: number): Transaction {
    return this.transactions.find(transaction => transaction.id === id);
  }

  updateTransaction(updatedTransaction: Transaction): void {
    const index = this.transactions.findIndex(t => t.id === updatedTransaction.id);
    if (index !== -1) {
      this.transactions[index] = updatedTransaction;
    }
  }
}
