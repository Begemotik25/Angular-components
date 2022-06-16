import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.scss']
})
export class FifthComponent implements OnInit {

  stringVal: string = "Hello! It's my first Angular-project!"
  constructor() { }
  ngOnInit(): void {}

}
