import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heroes = HEROES;
  constructor() { }

  ngOnInit() {
  }

}
