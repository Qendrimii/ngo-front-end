import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TODO_JPA_API_URL } from '../../app.constants';
import { Group } from '../../components/groups/groups.component';
@Injectable({
  providedIn: 'root'
})
export class GroupDataService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllGroups(username) {
    return this.http.get<Group[]>(`${TODO_JPA_API_URL}/users/${username}/groups `)
  }

  deleteGroup(username, id) {
    return this.http.delete(`${TODO_JPA_API_URL}/users/${username}/groups/${id} `)
  }

  retrieveGroup(username, id) {
    return this.http.get<Group>(`${TODO_JPA_API_URL}/users/${username}/groups/${id} `)
  }

  updateGroup(username, id, group) {
    return this.http.put(
      `${TODO_JPA_API_URL}/users/${username}/groups/${id} `, group)
  }

  createGroup(username, group) {
    return this.http.post(
      `${TODO_JPA_API_URL}/users/${username}/groups `, group)
  }



}
