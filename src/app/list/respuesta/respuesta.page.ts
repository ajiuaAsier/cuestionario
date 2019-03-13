import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.page.html',
  styleUrls: ['./respuesta.page.scss'],
})
export class RespuestaPage implements OnInit {
	
  myNombre = null;
  sabado = null;
  domingo = null;
  libres = null;
  pausa = null;
  ritmo = null;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
	this.myNombre = this.activatedRoute.snapshot.paramMap.get('myNombre');
	this.sabado = this.activatedRoute.snapshot.paramMap.get('sabado');
	this.domingo = this.activatedRoute.snapshot.paramMap.get('domingo');
	this.libres = this.activatedRoute.snapshot.paramMap.get('libres');
	this.pausa = this.activatedRoute.snapshot.paramMap.get('pausa');
	this.ritmo = this.activatedRoute.snapshot.paramMap.get('ritmo');
  }

}
