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

  //constructor(private activatedRoute: ActivatedRoute) { }

  constructor(private todoService: TodoService) { }


  //remove(item) {
  //  this.todoService.removeTodo(item.id);
  //}

  ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
      this.todos = res;
    });
   //this.myNombre = this.activatedRoute.snapshot.paramMap.get('myNombre');
   //this.apellido = this.activatedRoute.snapshot.paramMap.get('apellido');
   //this.correo = this.activatedRoute.snapshot.paramMap.get('correo');
   //this.sexo = this.activatedRoute.snapshot.paramMap.get('sexo');
	 //this.sabado = this.activatedRoute.snapshot.paramMap.get('sabado');
	 //this.domingo = this.activatedRoute.snapshot.paramMap.get('domingo');
	 //this.libres = this.activatedRoute.snapshot.paramMap.get('libres');
	 //this.pausa = this.activatedRoute.snapshot.paramMap.get('pausa');
	 //this.ritmo = this.activatedRoute.snapshot.paramMap.get('ritmo');
  }

}
