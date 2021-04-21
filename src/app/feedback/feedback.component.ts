import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Router } from "@angular/router";

import {MatChipInputEvent} from '@angular/material/chips';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})

export class FeedbackComponent implements OnInit {
  currentrate=0;
 
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  formatLabel(value: number) {
    if (value==1) {
      return "1";
    }
    else if(value==2)
    {
      return "2";
    }
    else if(value==3)
    {
      return "3";
    }
    else if(value==4)
    {
      return "4";
    }
    else if(value==5)
    {
      return "5";
    }

    return value;
  }

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [
    {name: 'well-managed'},
    {name: 'great experience'},
    {name: 'good platform'},
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
  get() {
    this.router.navigate(['/home']);

  }
}
