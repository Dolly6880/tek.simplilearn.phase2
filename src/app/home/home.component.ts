import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,public dialog: MatDialog) { }

  ngOnInit(): void {
  }
 
  getback() {
    this.router.navigate(['/start']);

  }

  appoint() {
    this.router.navigate(['/appoint']);

  }

}
