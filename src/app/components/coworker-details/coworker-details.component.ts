import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CoworkerService} from "../../services/coworker.service";

@Component({
  selector: 'app-coworker-details',
  templateUrl: './coworker-details.component.html',
  styleUrls: ['./coworker-details.component.css']
})
export class CoworkerDetailsComponent implements OnInit {
  currentCoworker = null;
  message = '';
  constructor(
    private coworkerService: CoworkerService,
    private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit(): void {
    this.message = '';
    this.getCoworker(this.route.snapshot.paramMap.get('id'));
  }
  getCoworker(id): void {
    this.coworkerService.get(id)
      .subscribe(
        data => {
          this.currentCoworker = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  updatePublished(status): void {
    const data = {
      title: this.currentCoworker.title,
      description: this.currentCoworker.description,
      published: status
    };
    this.coworkerService.update(this.currentCoworker.id, data)
      .subscribe(
        response => {
          this.currentCoworker.published = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
  updateCoworker(): void {
    this.coworkerService.update(this.currentCoworker.id, this.currentCoworker)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The coworker was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }
  deleteCoworker(): void {
    this.coworkerService.delete(this.currentCoworker.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/coworkers']);
        },
        error => {
          console.log(error);
        });
  }
}
}
