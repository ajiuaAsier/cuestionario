import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// Presentacion de la interfaz donde se recogeran la ¡s variables que interactuaran con la base de datos.
export interface Todo {
  nombre: string,
  apellido: string,
  correo: string,
  sexo: string,
  sabado: string,
  domingo: string,
  libres: string,
  pausa: string,
  ritmo: string,
}

// Declaracion de las acciones que podremos llamar en los ficheros necesarios para interactuar con la base de datos. Añadir, actualizar o eliminar.
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todosCollection: AngularFirestoreCollection<Todo>;

  private todos: Observable<Todo[]>

  constructor(db: AngularFirestore) { 
    this.todosCollection = db.collection<Todo>('todos');

    this.todos = this.todosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data }
        });
      })
    );
  }

  /*getTodos() {
    return this.todos;
  } */

  /*getTodos() {
    return this.todosCollection.doc<Todo>(id).valueChanges();
  }*/

  updateTodo(todo: Todo, id: string) {
    return this.todosCollection.doc(id).update(todo);
  }

  addTodo(todo: Todo) {
    return this.todosCollection.add(todo);
  }

  removeTodo(id) {
    return this.todosCollection.doc(id).delete();
  }

}
