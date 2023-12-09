import { Component } from '@angular/core';
import { AnimationBuilder, AnimationFactory, AnimationPlayer, animate, style } from '@angular/animations';
import { Router } from '@angular/router';
import { AnimationService } from '../services/animation-service';
import { CommonService } from '../services/common-service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private AnimationBuilder:AnimationBuilder, private Router:Router, private AnimationService:AnimationService,
    private CommonService:CommonService){

  }
  showQuote = false;
  technologiesAnimationDone = false;

  ngOnInit(){
    setTimeout(() => {
      this.slideShowAnimate();
    }, 500);
    
  }

  ngAfterViewInit(){
    let windowHeight = window.innerHeight;
    let technoContainer = document.querySelector(".technology-container");
    let animationInterval = setInterval(()=>{

      if(!this.technologiesAnimationDone){
        let positions:any = technoContainer?.getBoundingClientRect();
        if(positions?.top<=windowHeight-150){
          let slideEle = document.querySelector(".tech-absolute")
          this.AnimationService.slideLeftCustom(slideEle,-50,0);
          console.log("debug positions",positions,windowHeight);
          this.technologiesAnimationDone = true;
        }
      }

      if(this.technologiesAnimationDone){
        clearInterval(animationInterval)
      }
    },500)
  }

  slideShowAnimate(){
    let slide1 = document.getElementById("slide1");
    this.AnimationService.slideLeft(slide1)
    setTimeout(()=>{
      let slide2 = document.getElementById("slide2");
      this.AnimationService.slideLeft(slide2)
      setTimeout(()=>{
        let slide3 = document.getElementById("slide3");
        let player = this.AnimationService.slideLeft(slide3);
        player.onDone(()=>{
          this.showQuote= true;
        })
      },250)
    },250)
    
    
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
