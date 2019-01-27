import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  names: string[];

  ngOnInit(): void {
    this.names = _.map(['first', 'second'], value => `${value} button`);
  }
}
