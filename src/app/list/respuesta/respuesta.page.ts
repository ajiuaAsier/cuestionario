import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo, TodoService } from './../../services/todo.service';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.page.html',
  styleUrls: ['./respuesta.page.scss'],
})
export class RespuestaPage implements OnInit {
	
  nombre = null;
  apellido = null;
  correo = null;
  sexo = null;
  sabado = null;
  domingo = null;
  libres = null;
  pausa = null;
  ritmo = null;

  todos: Todo[];


  constructor(private todoService: TodoService) { }


  ngOnInit() {
  }

}
