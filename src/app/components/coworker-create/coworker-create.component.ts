import { Component, OnInit } from '@angular/core';
import {CoworkerService} from "../../services/coworker.service";

@Component({
  selector: 'app-coworker-create',
  templateUrl: './coworker-create.component.html',
  styleUrls: ['./coworker-create.component.css']
})
export class CoworkerCreateComponent implements OnInit {

  coworker = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;
  constructor(private coworkerService: CoworkerService) { }
  ngOnInit(): void {
  }
  saveCoworker(): void {
    const data = {
      title: this.coworker.title,
      description: this.coworker.description
    };
    this.coworkerService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  newCoworker(): void {
    this.submitted = false;
    this.coworker = {
      title: '',
      description: '',
      published: false
    };
  }
}

