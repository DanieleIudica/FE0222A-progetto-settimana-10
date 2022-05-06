import { Component, OnInit } from '@angular/core';
// importo service..
import { addTodo, getTodo, todos } from 'src/app/service/todos.service';
// importo interface...
// import { Todo } from 'src/app/interface/todo';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // array tasks
  lista = todos
  // valore input inserito (inizialmente vuoto)
  inputTodo = ''
  // messaggio di attesa
  messaggio = 'Sto cercando i tasks...'

  constructor() {
    // costruzione lista tasks
    getTodo().then((lista) => {
      this.lista = lista;
    })
   }

  //  metodo per aggiungere un nuovo task
  add(todo: string) {
    addTodo(todo);
    setTimeout(() => {
      this.inputTodo = '';
    }, 2000)
    console.log(this.lista);
  }

  // metodo che verifica la presenza di task inseriti
  verifica() {
    setTimeout(() => {
      if (this.lista.length === 0) {
        return this.messaggio = 'Nessun Tasks'
      } else {
        return this.messaggio = '';
      }
    }, 2000)
  }

  ngOnInit(): void {
    // inizializza verifica al caricamento della pagina
    this.verifica();
  }


  // metodo per completare un task
  toggleDone(id: number){
    this.lista.map((value, index) =>{
      if (index == id) value.completed = !value.completed;
      console.log(this.lista);
      return value;
    })
  }
}
