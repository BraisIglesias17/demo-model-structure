import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-model',
  templateUrl: './display-model.component.html',
  styleUrls: ['./display-model.component.scss']
})
export class DisplayModelComponent implements OnInit {

  @Input() title: string='';
  @Input() content: any='';
  
  constructor() { }

  ngOnInit(): void {
  }

}
