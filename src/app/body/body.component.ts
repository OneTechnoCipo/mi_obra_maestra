import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',/* Este vendria ser el nombre por el cual en app component los vamos a llamar */
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
