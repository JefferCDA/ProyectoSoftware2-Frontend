import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  componentContent = {
    textElements: {
      license: "Carnet Virtual",
      enrollment: "Matrícula",
      students: "Verificación estudiante",
      schedule: "Horarios",
      logout: "Cerrar Sesión" ,
      home: "Home"
    },
  };
  public opened = false;
  constructor() { }

  ngOnInit(): void {
  }

}
