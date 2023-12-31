
import { Component } from '@angular/core';
import { AnimationService } from '../services/animation-service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  constructor(private AnimationService:AnimationService){}
  selectedMenu = "Clients";
  ngOnInit(){
    this.slideAboutUsHeading();
  }

  slideAboutUsHeading(){
      let ele = document.querySelector('.about-us-heading');
      this.AnimationService.slideCustom(ele,{display:'flex',left:'-50%'},{left:'0%'})
  }
  choosedNav(menu:any){
    this.selectedMenu = menu;
  }

}
