import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../services/common-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private route:Router, private CommonService:CommonService){
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

  

  selected = "";

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
