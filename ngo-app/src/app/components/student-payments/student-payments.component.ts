import { Component, OnInit } from '@angular/core';
import { Student } from '../students/students.component';
import { Group } from '../groups/groups.component';
import { Trainer } from '../trainers/trainers.component';
import { Payments } from '../payments/payments.component';
import { StudentDataService } from '../../service/data/student-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentDataService } from '../../service/data/payment-data.service';
import { StudentStatus } from '../list-student-payments/list-student-payments.component';
import { ListPaymentsDataService } from '../../service/data/list-payments-data.service';


@Component({
  selector: 'app-student-payments',
  templateUrl: './student-payments.component.html',
  styleUrls: ['./student-payments.component.css']
})
export class StudentPaymentsComponent implements OnInit {
  id: number
  studentStatus: StudentStatus
  student: Student[]
  payment: Payments[]
  


  constructor(
    private studentStatusService: ListPaymentsDataService,
    private paymentService: PaymentDataService,
    private studentService: StudentDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshPayments();
    this.refreshStudents();

    this.id = this.route.snapshot.params['id'];

    this.studentStatus = new StudentStatus(this.id, new Student(this.id, '', '', new Group(this.id, '', 'qdemiraj'), new Trainer(this.id, '', '', false, new Date(), 'qdemiraj'), true, 'qdemiraj')
                                            , new Payments(this.id, '', ''), new Date(), '');

    if (this.id != -1) {

      this.studentStatusService.retrieveStudentStatus('qdemiraj', this.id).subscribe(
        data =>
          this.studentStatus = data
        )
    }
  }
  refreshPayments() {
    this.paymentService.retrieveAllPayments('qdemiraj').subscribe(
      response => {
        this.payment = response;
      }
    )
  }
  refreshStudents() {
    this.studentService.retrieveAllStudents('qdemiraj').subscribe(
      response => {
        this.student = response;
      }
    )
  }

  saveStudentStatus() {
    if (this.id == -1) {
      this.studentStatusService.createStudent('qdemiraj', this.studentStatus)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['studentstatus'])

          }
        )
    } else {
      this.studentStatusService.updateStudent('qdemiraj', this.id, this.studentStatus)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['studentstatus'])

          }
        )
    }
  }
}
