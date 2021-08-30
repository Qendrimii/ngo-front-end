import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TODO_JPA_API_URL } from '../../app.constants';
import { Payments } from '../../components/payments/payments.component';

@Injectable({
  providedIn: 'root'
})
export class PaymentDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllPayments(username) {
    return this.http.get<Payments[]>(`${TODO_JPA_API_URL}/users/${username}/payments `)
  }

  deletePayment(username, id) {
    return this.http.delete(`${TODO_JPA_API_URL}/users/${username}/payments/${id} `)
  }

  retrievePayment(username, id) {
    return this.http.get<Payments>(`${TODO_JPA_API_URL}/users/${username}/payments/${id} `)
  }

  updatePayment(username, id, payment) {
    return this.http.put(
      `${TODO_JPA_API_URL}/users/${username}/payments/${id} `, payment)
  }

  createPayment(username, payment) {
    return this.http.post(
      `${TODO_JPA_API_URL}/users/${username}/payments `, payment)
  }



}

