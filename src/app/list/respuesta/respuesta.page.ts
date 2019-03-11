import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.page.html',
  styleUrls: ['./respuesta.page.scss'],
})
export class RespuestaPage implements OnInit {
	
  myNombre = null;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
	this.myNombre = this.activatedRoute.snapshot.paramMap.get('myNombre');
  }

}
