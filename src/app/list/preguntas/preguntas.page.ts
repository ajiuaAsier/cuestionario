import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from './../../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.page.html',
  styleUrls: ['./preguntas.page.scss'],
})


export class PreguntasPage implements OnInit {



  todo: Todo = {
    nombre: null,
    apellido: null,
    correo: null,
    sexo: null,
    sabado: null,
    domingo: null,
    libres: null,
    pausa: null,
    ritmo: null
  }

  
 
  todoId = null;
 
  constructor(private route: ActivatedRoute, private nav: NavController, private todoService: TodoService, private loadingController: LoadingController) { }
 
  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    /*if (this.todoId)  {
      this.loadTodo();
    }*/
  }
 
  /*async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Loading Todo..'
    });
    await loading.present();
 
    this.todoService.getTodo(this.todoId).subscribe(res => {
      loading.dismiss();
      this.todo = res;
    });
  } */

  volverPage() {
    this.nav.navigateForward(`/home`);
  }
 
  // Las acciones que conlleva pulsar el boton "enviar" en el formulario. Primero crea un imagen de "guardando respuesta".
  async pushPage() {
    const loading = await this.loadingController.create({
      message: 'Guardando respuestas'
    });
    await loading.present();
 
    // En caso de que existan los datos los reemplaza, si no añade una nueva ficha a la base de datos.
    if (this.todoId) {
      this.todoService.updateTodo(this.todo, this.todoId).then(() => {
        loading.dismiss();
        this.nav.navigateForward(`/home`);
      });
    } else {
      this.todoService.addTodo(this.todo).then(() => {
        loading.dismiss();
        this.nav.navigateForward(`/home`);
      });
    }
  } 
}
