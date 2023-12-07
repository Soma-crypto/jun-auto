import { Component } from '@angular/core';
import { AnimationBuilder, AnimationFactory, AnimationPlayer, animate, style } from '@angular/animations';
import { Router } from '@angular/router';
import { CommonService } from '../services/common-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private AnimationBuilder:AnimationBuilder, private Router:Router, private CommonService:CommonService){

  }

  ngOnInit(){
    this.slideShowAnimate();
  }

  slideShowAnimate(){
    let slide1 = document.getElementById("slide1");
    let animationFactory = this.AnimationBuilder.build([
      style({ transform: 'translateX(0%)'}),
      animate('1s ease-in', style({ transform: 'translateX(100%)',display:'none'})),
    ]);
    let player = animationFactory.create(slide1);
    player.onDone(() => {
    });
    player.play();
  }

  navto(component:any){
    if(component == 'company'){
      this.Router.navigateByUrl("/company").then(()=>{
        this.CommonService.headerNavService.next({"nav":"company"});
      });
    }else if(component == 'technology'){
      this.Router.navigateByUrl("/technology").then(()=>{
        this.CommonService.headerNavService.next({"nav":"technology"})
      });
    }

  }

}
