import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';

class Link {
  path: string;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  links: Link[];

  ngOnInit(): void {
    this.links = [
      {
        path: '/',
        name: 'Home'
      },
      {
        path: '/users',
        name: 'Users'
      }
    ];
  }
}
