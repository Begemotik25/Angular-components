import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {

  arrayVal: number []= [15,1,23,56,88,4]

  constructor() { }
  ngOnInit(): void {}

}
