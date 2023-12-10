import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../services/common-service';
import { AnimationService } from '../services/animation-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  mobileMenuOpen = false;
  selected = "";

  constructor(private route:Router, private CommonService:CommonService, private AnimationService:AnimationService){
    this.CommonService.headerNavService.subscribe((data)=>{
      console.log("debug common service data",data)
      let url = location.href;
      this.selectTabBasedOnRoute(url);
    })
  }

  ngOnInit(){
      console.log("debug act route ")
      let url = location.href;
      this.selectTabBasedOnRoute(url);
  }

  openMenu(){
    this.mobileMenuOpen = true;
    
    setTimeout(()=>{
      let ele = document.querySelector(".nav-mobile-menu");
      this.AnimationService.slideCustom(ele,{right: '-103%',display:'flex'},{right:'0%',display:'flex'});
    },100)
    
  }

  closeMenu(){
    let ele = document.querySelector(".nav-mobile-menu");
    let player = this.AnimationService.slideCustom(ele,{right: '0%'},{right:'-103%',display:'none'});
    player.onDone(()=>{
      this.mobileMenuOpen = false;
    })
  }

  

  

  selectTabBasedOnRoute(url:any){
    console.log("debug url",url)
    if(url.includes('home')){
      this.navto('home')
    }else if(url.includes('company')){
      this.navto('company')
    }else if(url.includes('technology')){
      this.navto('technology')
    }else{
      this.selected = 'home'
    }

  }

  navto(comp:any){
      this.mobileMenuOpen = false;
      this.selected = comp?.toLowerCase();
      console.log("debug selected",this.selected)
      
      if(comp == "Home"){
        this.route.navigateByUrl("/home")
      }else if(comp == "Company"){
        this.route.navigateByUrl("/company")
      }else if(comp == "Technology"){
        this.route.navigateByUrl("/technology")
      }
  }

  navToHome(){
    location.href = "";
  }
  


}
