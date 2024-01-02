
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
        'products':['verna.jpeg','alcasar.jpeg','hyundai.png']
      },
      {
        'img':'alcasar.jpeg',
        'products':['verna.jpeg','alcasar.jpeg','hyundai.png']
      },
      {
        'img':'venue.jpeg',
        'products':['verna.jpeg','alcasar.jpeg','hyundai.png']
      },
      {
        'img':'creta.jpeg',
        'products':['verna.jpeg','alcasar.jpeg','hyundai.png']
      },
      {
        'img':'i10.jpeg',
        'products':['verna.jpeg','alcasar.jpeg','hyundai.png']
      },
      {
        'img':'i20.jpeg',
        'products':['verna.jpeg','alcasar.jpeg','hyundai.png']
      },
      {
        'img':'seltos.jpeg',
        'products':['verna.jpeg','alcasar.jpeg','hyundai.png']
      },
      {
        'img':'sonet.jpeg',
        'products':['verna.jpeg','alcasar.jpeg','hyundai.png']
      },
      {
        'img':'carens.jpeg',
        'products':['verna.jpeg','alcasar.jpeg','hyundai.png']
      },
      {
        'img':'carnival.jpeg',
        'products':['verna.jpeg','alcasar.jpeg','hyundai.png']
      },
      {
        'img':'d-max.jpeg',
        'products':['verna.jpeg','alcasar.jpeg','hyundai.png']
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
