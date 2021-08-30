import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentDataService } from '../../service/data/student-data.service';
import { Group } from '../groups/groups.component';
import { Trainer } from '../trainers/trainers.component';



export class Student {

  constructor(
    public ids: number,
    public firstName: string,
    public lastName: string,
    public idg: Group,
    public idt: Trainer,
    public isActive: boolean,
    public username: string

  ) {

  }

}

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

export class ListStudentsComponent implements OnInit {

  filteredStudents: Student[];
  private _searchTerm: string;
  students: Student[];
  message: string;


  get searchTerm(): string {
    if (this._searchTerm == null) {
      this.filteredStudents = this.students;

    }

    return this._searchTerm;
  }

  set searchTerm(value: string) {

    this._searchTerm = value;
    this.filteredStudents = this.filterStudents(value);
  }                               

  filterStudents(searchString: string) {

    return this.students.filter(student =>
      student.firstName.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);

  }


  constructor(
    private studentService: StudentDataService,
    private router: Router

  ) { }

  ngOnInit() {
    
    this.refreshStudents();

  }

  refreshStudents() {
    this.studentService.retrieveAllStudents('qdemiraj').subscribe(
      response => {
        this.students = response;
      }
    )
  }

  deleteStudent(id) {
    this.studentService.deleteStudent('qdemiraj', id).subscribe(
      response => {
        console.log(response);
        this.message = `Fshirja e Studentit ${id} eshte kryer me sukses!`;
        this.refreshStudents();
      })
  }
  updateStudent(id) {
    this.router.navigate(['students', id])
  }
  addStudent() {
    this.router.navigate(['students', -1])

  }
}



