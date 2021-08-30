import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { StudentDataService } from '../../service/data/student-data.service';
import { Student } from '../students/students.component';
import { StudentStatus } from '../list-student-payments/list-student-payments.component';
import { ListPaymentsDataService } from '../../service/data/list-payments-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  student: Student[];
  studentStatus: StudentStatus[];

  activeStudents: number;
  nonActiveStudents: number;

  paraNeDore: number;
  pageseBankare: number;
  iLiruar: number;
  paPaguar: number;
  rastSocial: number;

  constructor(
    private studentService: StudentDataService,
    private studentStatusService: ListPaymentsDataService

  ) { }

  ngOnInit() {
    this.refreshStudents();
    this.refreshStudentsStatus();

  }
  getChart1(paraNeDore: number, pageseBankare: number, iLiruar: number, paPaguar: number, rastSocial: number) {
    var myChart = new Chart("myChart", {
      type: 'pie',
      data: {
        labels: ['Para në dorë', 'Pagesë bankare', 'I liruar', 'Pa paguar', 'Rast Social'],
        datasets: [{
          label: 'Numri i studenteve',
          data: [paraNeDore, pageseBankare, iLiruar, paPaguar, rastSocial],
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(227, 32, 35, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(227, 32, 35, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });

  }

  getChart2(value1:number,value2:number) {
    var myChart1 = new Chart("myChart1", {
      type: 'bar',
      data: {
        labels: ['Aktiv', 'Jo-aktiv'],
        datasets: [{
          label: 'Numri i studenteve aktiv',
          data: [value1, value2],
          backgroundColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)'

          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  refreshStudents() {
    this.studentService.retrieveAllStudents('qdemiraj').subscribe(
      response => {
        this.student = response;
        this.activeStudents = 0;
        this.nonActiveStudents = 0;
        for (let students of this.student) {
          if (students.isActive) {
            this.activeStudents++;
          } else {
            this.nonActiveStudents++;
          }
        }
        this.getChart2(this.activeStudents, this.nonActiveStudents);
        
      }
    )
  }
  refreshStudentsStatus() {
    this.studentStatusService.retrieveAllStudentsStatus('qdemiraj').subscribe(
      response => {
        this.studentStatus = response;
        this.paraNeDore=0;
        this.pageseBankare=0;
        this.iLiruar=0;
        this.paPaguar=0;
        this.rastSocial=0;
        for (let studentStatus of this.studentStatus) {
          if (studentStatus.payment.lloji === 'Para në dorë') {
            this.paraNeDore++;
          }
          if (studentStatus.payment.lloji === 'Pagesë bankare') {
            this.pageseBankare++;
          }
          if (studentStatus.payment.lloji === 'I liruar') {
            this.iLiruar++;
          }
          if (studentStatus.payment.lloji === 'Pa paguar') {
            this.paPaguar++;
          }
          if (studentStatus.payment.lloji === 'Rast social') {
            this.rastSocial++;
          }
        }
        this.getChart1(this.paraNeDore, this.pageseBankare, this.iLiruar, this.paPaguar, this.rastSocial);
      }
    )
  }
}
