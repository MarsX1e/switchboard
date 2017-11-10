import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SwitchComponent implements OnInit {
  array:Array<boolean>=[false,true,true,true,true,true,true,true]

  constructor() { }

  ngOnInit() {
  }

}
