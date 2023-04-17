import { Component } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {
// classe que vai deixar o 240 animado, contador de caracteres
  tweetMessage: string = "" 
  tweetMaxLenght: number = 240
  tweetRemain: number = this.tweetMaxLenght

  constructor(private service: MessagesService){

  }

  /* vai add a mensagem no service, resetar o contador apos ela ser */ 
  sendTweet(){
    this.service.addMessage(this.tweetMessage)
    this.tweetMessage =""
    this.tweetRemain = this.tweetMaxLenght  
  }

  
  changeTweet(){
    this.tweetRemain = this.tweetMaxLenght - this.tweetMessage.length
  }
}
  /* assim fica preso nos 240, agora vc pode alterar la em cima para qqlr valor 
  alterando todas de uma vez
  changeTweet(){
    this.tweetRemain = 240 - this.tweetMessage.length
*/