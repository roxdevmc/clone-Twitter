import { Component } from '@angular/core';

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

  sendTweet(){
    alert(this.tweetMessage)
  }

  changeTweet(){
    this.tweetRemain = 240 - this.tweetMessage.length
  }
}
