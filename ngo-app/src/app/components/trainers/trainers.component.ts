import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainerDataService } from '../../service/data/trainer-data.service';


export class Trainer {

  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public isActive: boolean,
    public birthdate: Date,
    public username: string
  ) {

  }
}

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css']
})

export class ListTrainersComponent implements OnInit {

  trainers: Trainer[]
  message: string



  constructor(
    private trainerService: TrainerDataService,
    private router: Router,

  ) { }

  ngOnInit() {
    this.refreshTrainers();

  }

  refreshTrainers() {
    this.trainerService.retrieveAllTrainers('qdemiraj').subscribe(
      response => {
        this.trainers = response;
      }
    )
  }

  deleteTrainer(id) {
    this.trainerService.deleteTrainer('qdemiraj', id).subscribe(
      response => {
        console.log(response);
        this.message = `Fshirja e trajnerit ${id} eshte kryer me sukses!`;
        this.refreshTrainers();
      })
  }
  updateTrainer(id) {
    this.router.navigate(['trainers', id])
  }
  addTrainer() {
    this.router.navigate(['trainers', -1])

  }
}




