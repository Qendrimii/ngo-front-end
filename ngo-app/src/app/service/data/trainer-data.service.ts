import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TODO_JPA_API_URL } from '../../app.constants';
import { Trainer } from '../../components/trainers/trainers.component';
@Injectable({
  providedIn: 'root'
})
export class TrainerDataService {

  constructor(
    private http: HttpClient
    
  ) { }

  retrieveAllTrainers(username) {
    return this.http.get<Trainer[]>(`${TODO_JPA_API_URL}/users/${username}/trainers `)
  }

  deleteTrainer(username, id) {
    return this.http.delete(`${TODO_JPA_API_URL}/users/${username}/trainers/${id} `)
  }

  retrieveTrainer(username, id) {
    return this.http.get<Trainer>(`${TODO_JPA_API_URL}/users/${username}/trainers/${id} `)
  }

  updateTrainer(username, id, trainer) {
    return this.http.put(
      `${TODO_JPA_API_URL}/users/${username}/trainers/${id} `, trainer)
  }

  createTrainer(username, trainer) {
    return this.http.post(
      `${TODO_JPA_API_URL}/users/${username}/trainers `, trainer)
  }



}
