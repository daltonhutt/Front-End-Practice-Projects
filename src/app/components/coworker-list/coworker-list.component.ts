import { Component, OnInit } from '@angular/core';
import {CoworkerService} from "../../services/coworker.service";
@Component({
  selector: 'app-coworker-list',
  templateUrl: './coworker-list.component.html',
  styleUrls: ['./coworker-list.component.css']
})
export class CoworkerListComponent implements OnInit {
  coworkers: any;
  currentCoworker = null;
  currentIndex = -1;
  title = '';
  constructor(private coworkerService: CoworkerService) { }
  ngOnInit(): void {
    this.retrieveCoworkers();
  }
  retrieveCoworkers(): void {
    this.coworkerService.getAll()
      .subscribe(
        data => {
          this.coworkers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrieveCoworkers();
    this.currentCoworker = null;
    this.currentIndex = -1;
  }
  setActiveCoworker(coworker, index): void {
    this.currentCoworker = coworker;
    this.currentIndex = index;
  }
  removeAllCoworkers(): void {
    this.coworkerService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveCoworkers();
        },
        error => {
          console.log(error);
        });
  }
  searchTitle(): void {
    this.coworkerService.findByTitle(this.title)
      .subscribe(
        data => {
          this.coworkers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
