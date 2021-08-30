import { Component, OnInit } from '@angular/core';
import { GroupDataService } from '../../service/data/group-data.service';
import { Group } from '../groups/groups.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})


export class GroupComponent implements OnInit {
  id: number
  group: Group

  constructor(
    private groupService: GroupDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {


    this.id = this.route.snapshot.params['id'];

    this.group = new Group(this.id, '','qdemiraj');

    if (this.id != -1) {

      this.groupService.retrieveGroup('qdemiraj', this.id)
        .subscribe(
          data => this.group = data
        )
    }
  }
  saveGroup() {
    if (this.id != -1) {
      this.groupService.createGroup('qdemiraj', this.group)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['groups'])

          }
        )
    } else {
      this.groupService.updateGroup('qdemiraj', this.id, this.group)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['groups'])

          }
        )
    }
  }
}

