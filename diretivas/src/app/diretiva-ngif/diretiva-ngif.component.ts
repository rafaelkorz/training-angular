import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.sass']
})
export class DiretivaNgifComponent implements OnInit {

  cursos: string[] = ['Angular'];

  mostrarCursos: boolean;

  onMostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
