import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../students/students.component';
import { Payments } from '../payments/payments.component';
import { ListPaymentsDataService } from '../../service/data/list-payments-data.service';


export class StudentStatus {
  constructor(
    public idps: number,
    public student: Student,
    public payment: Payments,
    public data: Date,
    public username: string
  ) {

  }
}

@Component({
  selector: 'app-list-student-payments',
  templateUrl: './list-student-payments.component.html',
  styleUrls: ['./list-student-payments.component.css']
})

export class ListStudentPaymentsComponent implements OnInit {


  filterdStudentStatus: StudentStatus[];
  private _searchTerm: string;
  message: string;
  studentStatus: StudentStatus[];

  get searchTerm(): string {
    if (this._searchTerm == null) {
      this.filterdStudentStatus = this.studentStatus;
    }
    return this._searchTerm;
  }

  set searchTerm(value: string) {

    this._searchTerm = value;
    this.filterdStudentStatus = this.filterStudentStatus(value);
  }

  filterStudentStatus(searchString: string) {

    return this.studentStatus.filter(studentStatus =>
      studentStatus.student.firstName.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);

  }

  constructor(
    private studentStatusService: ListPaymentsDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.refreshStudentsStatus();

  }
  refreshStudentsStatus() {
    this.studentStatusService.retrieveAllStudentsStatus('qdemiraj').subscribe(
      response => {
        this.studentStatus = response;
      }
    )
  }

  deleteStudentStatus(id) {
    this.studentStatusService.deleteStudentStatus('qdemiraj', id).subscribe(
      response => {
        console.log(response);
        this.message = `Fshirja e Statusit te Studentit ${id} eshte kryer me sukses!`;
        this.refreshStudentsStatus();
      })
  }
  updateStudentStatus(id) {
    this.router.navigate(['studentstatus', id])
  }
  addStudentStatus() {
    this.router.navigate(['studentstatus', -1])

  }

}
