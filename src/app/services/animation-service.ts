import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { AnimationBuilder, animate, style } from "@angular/animations";

@Injectable({
    providedIn: 'root'
  })
 
export class AnimationService {

  constructor(private AnimationBuilder:AnimationBuilder ){

  }
  
    
  slideLeft(ele:any){
    let animationFactory = this.AnimationBuilder.build([
      style({ display:'flex',left: '0%'}),
      animate('1s ease-in-out', style({ left: '100%',display:'none'})),
    ]);
    let player = animationFactory.create(ele);
    
    player.play();
   
    return player;
  }
  slideLeftCustom(ele:any,from:any,to:any){
    
    let animationFactory = this.AnimationBuilder.build([
      style({left: `${from}%`}),
      animate('0.5s ease-in-out', style({ left: `${to}%`})),
    ]);
    let player = animationFactory.create(ele);
    player.play();
    return player;
  }

  slideCustom(ele:any,fromStyle:any,toStyle:any){
    let animationFactory = this.AnimationBuilder.build([
      style(fromStyle),
      animate('0.5s ease-in-out', style(toStyle)),
    ]);
    let player = animationFactory.create(ele);
    player.play();
    return player;
  }
}