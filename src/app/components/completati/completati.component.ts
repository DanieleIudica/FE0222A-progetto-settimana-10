import { Component, OnInit } from '@angular/core';
// importo service..
import { todos } from 'src/app/service/todos.service';


@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit {
  // array tasks
  lista = todos
  // messaggio di attesa
  messaggio = 'Sto cercando i tasks...'
  constructor() { }

  ngOnInit(): void {
  }

  // metodo che elimina la task, tolgo l'elemento cliccato con il metodo filter
  // deleteTodo (id: number){
  //   setTimeout(() =>{
  //   this.lista = this.lista.filter((value, index) => index !== id)
  //   },2000)
  // }
}
