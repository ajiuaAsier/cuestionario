import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.page.html',
  styleUrls: ['./preguntas.page.scss'],
})
export class PreguntasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  myNombre: string;
  
  enviar() {
	 alert(this.myNombre);
  }
}
