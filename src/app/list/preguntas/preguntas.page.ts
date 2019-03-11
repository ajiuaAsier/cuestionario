import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.page.html',
  styleUrls: ['./preguntas.page.scss'],
})
export class PreguntasPage implements OnInit {

  myName = 0;

  constructor(private nav: navController) { }

  ngOnInit() {
  }
  
  pushPage() {
	this.nav.navigateForward(`/respuesta/${this.myName}`);  
  }
}
