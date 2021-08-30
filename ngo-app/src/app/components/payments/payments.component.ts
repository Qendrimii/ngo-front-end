import { Component, OnInit } from '@angular/core';
import { PaymentDataService } from '../../service/data/payment-data.service';
import { Router } from '@angular/router';

export class Payments {
  constructor(
    public id: number,
    public lloji: string,
    public username: string
    
  ) {

  }
}

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})

export class PaymentsComponent implements OnInit {

  payments: Payments[]
  message: string



  constructor(
    private paymentService: PaymentDataService,
    private router: Router

  ) { }

  ngOnInit() {
    this.refreshPaymets();

  }

  refreshPaymets() {
    this.paymentService.retrieveAllPayments('qdemiraj').subscribe(
      response => { 
        this.payments = response;
      }
    )
  }

  deletePayment(id) {
    this.paymentService.deletePayment('qdemiraj', id).subscribe(
      response => {
        console.log(response);
        this.message = `Fshirja e Pageses  ${id} eshte kryer me sukses!`;
        this.refreshPaymets();
      })
  }
  updatePayment(id) {
    this.router.navigate(['payments', id])
  }
  addPayment() {
    this.router.navigate(['payments', -1])

  }
}
