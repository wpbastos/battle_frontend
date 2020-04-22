import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() msg: string
  subtitle: string = 'Angular'
  
  constructor() { }

  ngOnInit(): void {
  }

  resetSubtitle(): void {
    this.subtitle = 'Angular'
  }

}
