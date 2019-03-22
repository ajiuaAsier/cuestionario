import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.page.html',
  styleUrls: ['./preguntas.page.scss'],
})
export class PreguntasPage implements OnInit {

  myNombre = null;
  apellido = null;
  correo = null;
  sexo = null;
  sabado = null;
  domingo = null;
  libres = null;
  pausa = null;
  ritmo = null;

  constructor(private nav: NavController) { }

  ngOnInit() {
  }
  
  pushPage() {
	this.nav.navigateForward(`/respuesta/${this.myNombre}/${this.apellido}/${this.correo}/${this.sexo}/${this.sabado}/${this.domingo}/${this.libres}/${this.pausa}/${this.ritmo}`);  
  }
}
