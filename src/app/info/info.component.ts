import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gethome() {
    this.router.navigate(['/home']);

  }
  getquiz() {
    this.router.navigate(['/quiz']);

  }
  ar2() {
    this.router.navigate(['/regpage']);

  }
  feed() {
    this.router.navigate(['/feed']);

  }
}
