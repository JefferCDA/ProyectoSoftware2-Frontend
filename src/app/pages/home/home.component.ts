import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showM: String;
  title: string;
  grafic = 'assets/images/grafico.png';
  logoUR = 'assets/images/logoURblue.png';
  prom = 'assets/images/promedio.png';

  constructor() { }

  ngOnInit(): void {
  }

  showModal(event: string, titlo: string) {
    this.showM = event;
    this.title = titlo;
  }
  closeModal(e: string) {
    this.showM = e;
  }
}
