import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TODO_JPA_API_URL } from '../../app.constants';
import { Student } from '../../components/students/students.component';
@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllStudents(username) {
    return this.http.get<Student[]>(`${TODO_JPA_API_URL}/users/${username}/students `)
  }

  deleteStudent(username, id) {
    return this.http.delete(`${TODO_JPA_API_URL}/users/${username}/students/${id} `)
  }

  retrieveStudent(username, id) {
    return this.http.get<Student>(`${TODO_JPA_API_URL}/users/${username}/students/${id} `)
  }

  updateStudent(username, id, student) {
    return this.http.put(
      `${TODO_JPA_API_URL}/users/${username}/students/${id} `, student)
  }

  createStudent(username, student) {
    return this.http.post(
      `${TODO_JPA_API_URL}/users/${username}/students `, student)
  }



}
