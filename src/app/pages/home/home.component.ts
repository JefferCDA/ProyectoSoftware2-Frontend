import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  grafic = 'assets/images/grafico.png';
  logoUR = 'assets/images/logoURblue.png'

  constructor() { }

  ngOnInit(): void {
  }

}
