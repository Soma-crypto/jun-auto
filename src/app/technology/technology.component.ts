import { Component } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent {
  length = 10;
  selectedIndex = 1;
  carousal = [
    {
      imagesRow1:[{img:'creta.jpeg'},{img:'alcasar.jpeg'}],
      imagesRow2:[{img:'creta.jpeg'},{img:'alcasar.jpeg'}],
      contentHeading:'Lorem Ipsum',
      content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      focusId:"content1",
      index:1,
    },
    {
      imagesRow1:[{img:'creta.jpeg'},{img:'alcasar.jpeg'}],
      imagesRow2:[{img:'creta.jpeg'},{img:'alcasar.jpeg'}],
      contentHeading:'Ipsum Lorem',
      content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      focusId:"content1",
      index:2,
    },
    {
      imagesRow1:[{img:'creta.jpeg'},{img:'alcasar.jpeg'}],
      imagesRow2:[{img:'creta.jpeg'},{img:'alcasar.jpeg'}],
      contentHeading:'Lorem dupsam',
      content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      focusId:"content1",
      index:3,
    },
    {
      imagesRow1:[{img:'creta.jpeg'},{img:'alcasar.jpeg'}],
      imagesRow2:[{img:'creta.jpeg'},{img:'alcasar.jpeg'}],
      contentHeading:'dupsam Lorem Ipsum',
      content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      focusId:"content1",
      index:4,
    }
  ]
  carousalInterval:any;

  ngOnInit(){

    this.carousalInterval = setInterval(()=>{
      if(this.selectedIndex == 4){
        this.selectedIndex =1; 
      }else{
        this.selectedIndex = this.selectedIndex+1;
      }
    },3000)

  }

  moveCarousalTo(idx:any){
    clearInterval(this.carousalInterval);
    console.log(idx)
    this.selectedIndex = idx;
  }

  navCarousalTo(dir:any){
    clearInterval(this.carousalInterval);
      if(dir == 'L'){
        if(this.selectedIndex == 1){
          this.selectedIndex = 4
        }else{
          this.selectedIndex = this.selectedIndex - 1;
        }
      }else{
        if(this.selectedIndex == 4){
          this.selectedIndex = 1
        }else{
          this.selectedIndex = this.selectedIndex + 1;
        }
      }
  }

}
