import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private route:Router){

  }

  ngOnInit(){
      console.log("debug act route ")
      let url = location.href;
      this.selectTabBasedOnRoute(url);
  }

  selected = "";

  selectTabBasedOnRoute(url:any){
    if(url.includes('home')){
      this.navto('home')
    }else if(url.includes('company')){
      this.navto('company')
    }else if(url.includes('technology')){
      this.navto('technology')
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
  


}
