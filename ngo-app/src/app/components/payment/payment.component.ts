import { Component, OnInit } from '@angular/core';
import { Payments } from '../payments/payments.component';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentDataService } from '../../service/data/payment-data.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit {
  id: number
  payment: Payments

  constructor(
    private paymentService: PaymentDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {


    this.id = this.route.snapshot.params['id'];

    this.payment = new Payments(this.id, '', 'qdemiraj');

    if (this.id != -1) {

      this.paymentService.retrievePayment('qdemiraj', this.id)
        .subscribe(
          data => this.payment = data
        )
    }
  }

  savePayment() {
    if (this.id != -1) {
      this.paymentService.createPayment('qdemiraj', this.payment)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['payments'])

          }
        )
    } else {
      this.paymentService.updatePayment('qdemiraj', this.id, this.payment)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['payments'])

          }
        )
    }
  }
}

