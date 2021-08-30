import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentStatus } from '../../components/list-student-payments/list-student-payments.component';
import { TODO_JPA_API_URL } from '../../app.constants';


@Injectable({
  providedIn: 'root'
})
export class ListPaymentsDataService {

  constructor(
    private http: HttpClient
  ) { }
  retrieveStudentStatus(username, id) {
    return this.http.get<StudentStatus>(`${TODO_JPA_API_URL}/users/${username}/studentsstatus/${id} `)
  }

  retrieveAllStudentsStatus(username) {
    return this.http.get<StudentStatus[]>(`${TODO_JPA_API_URL}/users/${username}/studentsstatus`)
  }
  deleteStudentStatus(username, id) {
    return this.http.delete<StudentStatus>(`${TODO_JPA_API_URL}/users/${username}/studentsstatus/${id} `)
  }
  updateStudent(username, id, studentStatus) {
    return this.http.put(
      `${TODO_JPA_API_URL}/users/${username}/studentsstatus/${id} `, studentStatus)
  }

  createStudent(username, studentStatus) {
    return this.http.post(
      `${TODO_JPA_API_URL}/users/${username}/studentsstatus `, studentStatus)
  }

}
