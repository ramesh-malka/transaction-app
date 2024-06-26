import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService, Transaction } from '../transaction.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.css']
})
export class TransactionDetailsComponent implements OnInit {
  transaction: Transaction;
  transactionForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private transactionService: TransactionService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.transaction = this.transactionService.getTransactionById(id);
    this.transactionForm = this.fb.group({
      comments: [this.transaction.comments]
    });
  }

  onSubmit() {
    this.transaction.comments = this.transactionForm.value.comments;
    this.transactionService.updateTransaction(this.transaction);
    this.router.navigate(['/transactions']);
  }
}
