import { Component, OnInit } from '@angular/core';
import { GroupDataService } from '../../service/data/group-data.service';
import { Router } from '@angular/router';

export class Group {
  constructor(
    public id: number,
    public groupName: string,
    public username: string
  ) {

  }
}

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  groups: Group[]
  message: string



  constructor(
    private groupService: GroupDataService,
    private router: Router

  ) { }

  ngOnInit() {
    this.refreshGroups();
  }

  refreshGroups() {
    this.groupService.retrieveAllGroups('qdemiraj').subscribe(
      response => {
        this.groups = response;
      }
    )
  }

  deleteGroup(id) {
    this.groupService.deleteGroup('qdemiraj', id).subscribe(
      response => {
        console.log(response);
        this.message = `Fshirja e Grupit  ${id} eshte kryer me sukses!`;
        this.refreshGroups();
      })
  }
  updateGroup(id) {
    this.router.navigate(['groups', id])
  }
  addGroup() {
    this.router.navigate(['groups', -1])

  }
}
