import { Component, OnInit } from '@angular/core';
import { StudentDataService } from '../../service/data/student-data.service';
import { Student } from '../students/students.component';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupDataService } from '../../service/data/group-data.service';
import { Group } from '../groups/groups.component';
import { TrainerDataService } from '../../service/data/trainer-data.service';
import { Trainer } from '../trainers/trainers.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  id: number
  student: Student
  groups: Group[]
  trainers: Trainer[]



  constructor(
    private studentService: StudentDataService,
    private groupService: GroupDataService,
    private trainerService: TrainerDataService,
    private route: ActivatedRoute,
    private router: Router
    
  ) { }

  ngOnInit() {

    this.refreshGroups();
    this.refreshTrainers(); 


    this.id = this.route.snapshot.params['id'];

    this.student = new Student(this.id, '', '', new Group(this.id, '', 'qdemiraj') , new Trainer(this.id, '', '', false, new Date(), 'qdemiraj') , true, 'qdemiraj');

    if (this.id != -1) {



      this.studentService.retrieveStudent('qdemiraj', this.id)
        .subscribe(
          data => this.student = data
        )
    }
  }
  refreshGroups() {
    this.groupService.retrieveAllGroups('qdemiraj').subscribe(
      response => {
        this.groups = response;
      }
    )
  }
  refreshTrainers() {
    this.trainerService.retrieveAllTrainers('qdemiraj').subscribe(
      response => {
        this.trainers = response;
      }
    )
  }

  saveStudent() {
    if (this.id != -1) {
      this.studentService.createStudent('qdemiraj', this.student)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['students'])

          }
        )
    } else {
      this.studentService.updateStudent('qdemiraj', this.id, this.student)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['students'])

          }
        )
    }
  }
}
