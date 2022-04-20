import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {

  @Input('external') external:boolean = false;
  @Input('route') route:string = '';
  @Input('title') title:string = '';
  @Input('type') type:string = 'circle';
  @Input('depth') depth:string = 'inset';

  constructor() { }

  ngOnInit(): void {
  }

}
