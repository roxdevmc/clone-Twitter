import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
// classe privada, só ele acessa, vetor de string vazia
  private messages: string[] = []

  constructor() { }

  // add as mensagens criadas
  addMessage(message:string){
    this.messages.push(message)
  }

  // pegar as menssagem e retornar elas
  getMessages(){
    return this.messages
  }

  // limpar, função que zera o vetor 
  clearMessage(){
    this.messages = []
  }
}
