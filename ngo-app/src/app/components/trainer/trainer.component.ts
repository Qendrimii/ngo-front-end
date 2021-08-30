import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trainer } from '../trainers/trainers.component';
import { TrainerDataService } from '../../service/data/trainer-data.service';


@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {
  id: number
  trainer: Trainer

  constructor(
    private trainerService: TrainerDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {


    this.id = this.route.snapshot.params['id'];

    this.trainer = new Trainer(this.id, '','', false, new Date(),'qdemiraj');

    if (this.id != -1) {

      this.trainerService.retrieveTrainer('qdemiraj', this.id)
        .subscribe(
          data => this.trainer = data
        )
    }
  }
  saveTrainer() {
    if (this.id != -1) {
      this.trainerService.createTrainer('qdemiraj', this.trainer)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['trainers'])

          }
        )
    } else {
      this.trainerService.updateTrainer('qdemiraj', this.id, this.trainer)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['trainers'])

          }
        )
    }
  }
}
