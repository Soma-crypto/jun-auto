
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
  productsArray :any= [];
  selectedSlideIndex = 1;
  slideDir = "l";
  ngOnInit(){
    this.slideAboutUsHeading();
    this.productsArray = [
      {
        'img':'verna.jpeg',
        'products':[{'img':'verna-door-panel.jpeg','label':'Door panel'},{'img':'trim-cover1.jpeg','label':'Trim cover'},{'img':'trim-cover2.jpeg','label':'Trim cover'}]
      },
      {
        'img':'alcasar.jpeg',
        'products':[{'img':'creta-alcazar-door.jpeg','label':'Door panel'},{'img':'seating2.jpeg','label':'Seating'},{'img':'seat-cut-panel2.jpeg','label':'Seat panel'}]
      },
      {
        'img':'venue.jpeg',
        'products':[{'img':'seating2.jpeg','label':'Seating'},{'img':'seating.jpeg','label':'Seting'},{'img':'trim-cover4.jpeg','label':'Trim cover'}]
      },
      {
        'img':'creta.jpeg',
        'products':[{'img':'creta-alcazar-door.jpeg','label':'Door panel'},{'img':'trim-cover4.jpeg','label':'Trim cover'},{'img':'trim-cover2.jpeg','label':'Trim cover'}]
      },
      {
        'img':'i10.jpeg',
        'products':[{'img':'seating.jpeg','label':'Seating'},{'img':'seating2.jpeg','label':'Seating'},{'img':'trim-cover3.jpeg','label':'Trim cover'}]
      },
      {
        'img':'i20.jpeg',
        'products':[{'img':'trim-cover4.jpeg','label':'Trim cover'},{'img':'trim-cover2.jpeg','label':'Trim cover'},{'img':'trim-cover3.jpeg','label':'Trim cover'}]
      },
      {
        'img':'seltos.jpeg',
        'products':[{'img':'seltos-door.jpeg','label':'Door panel'},{'img':'trim-cover1.jpeg','label':'Trim cover'},{'img':'trim-cover2.jpeg','label':'Trim cover'}]
      },
      {
        'img':'sonet.jpeg',
        'products':[{'img':'sonet-door.jpeg','label':'verna'},{'img':'seat-cut-panel2.jpeg','label':'alcazar'},{'img':'seat-cut-panel.jpeg','label':'creta'}]
      },
      {
        'img':'carens.jpeg',
        'products':[{'img':'trim-cover5.jpeg','label':'Trim cover'},{'img':'trim-cover4.jpeg','label':'Trim cover'},{'img':'seat-cut-panel.jpeg','label':'Seat panel'}]
      },
      {
        'img':'carnival.jpeg',
        'products':[{'img':'trim-cover3.jpeg','label':'Trim cover'},{'img':'trim-cover2.jpeg','label':'Trim cover'},{'img':'trim-cover1.jpeg','label':'Trim cover'}]
      },
      {
        'img':'d-max.jpeg',
        'products':[{'img':'seating2.jpeg','label':'Seating'},{'img':'creta-alcazar-door.jpeg','label':'Door panel'},{'img':'seat-cut-panel2.jpeg','label':'Seat panel'}]
      }
    ]
  }

  slideAboutUsHeading(){
      let ele = document.querySelector('.about-us-heading');
      this.AnimationService.slideCustom(ele,{display:'flex',left:'-50%'},{left:'0%'})
  }
  choosedNav(menu:any){
    this.selectedMenu = menu;
  }
  slideNext(currentIndex:any,dir:any){
    this.slideDir = dir;
    // setTimeout(() => {
      let totalLength = this.productsArray.length;
      if(currentIndex == totalLength-1){
        this.selectedSlideIndex= 0;
      }else{
        this.selectedSlideIndex = currentIndex+1;
      }
    // }, 100);
    
    
  }

  slidePrev(currentIndex:any,dir:any){
    this.slideDir = dir;
    
    // setTimeout(() => {
      let totalLength = this.productsArray.length;
      if(currentIndex == 0){
        this.selectedSlideIndex= totalLength-1;
      }else{
        this.selectedSlideIndex = currentIndex-1;
      } 
    // }, 100);

    
    
  }

}
