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
      detailImg:[{img:'creta.jpeg'},{img:'alcasar.jpeg'},{img:'creta.jpeg'},{img:'alcasar.jpeg'}],
      contentHeading:'Lorem Ipsum',
      content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      detailContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      focusId:"content1",
      index:1,
      isEven:false,
    },
    {
      imagesRow1:[{img:'creta.jpeg'},{img:'alcasar.jpeg'}],
      imagesRow2:[{img:'creta.jpeg'},{img:'alcasar.jpeg'}],
      detailImg:[{img:'creta.jpeg'},{img:'alcasar.jpeg'},{img:'creta.jpeg'},{img:'alcasar.jpeg'}],
      contentHeading:'Ipsum Lorem',
      content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      detailContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      focusId:"content2",
      index:2,
      isEven:true,
    },
    {
      imagesRow1:[{img:'creta.jpeg'},{img:'alcasar.jpeg'}],
      imagesRow2:[{img:'creta.jpeg'},{img:'alcasar.jpeg'}],
      detailImg:[{img:'creta.jpeg'},{img:'alcasar.jpeg'},{img:'creta.jpeg'},{img:'alcasar.jpeg'}],
      contentHeading:'Lorem dupsam',
      content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      detailContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      focusId:"content3",
      index:3,
      isEven:false,
    },
    {
      imagesRow1:[{img:'creta.jpeg'},{img:'alcasar.jpeg'}],
      imagesRow2:[{img:'creta.jpeg'},{img:'alcasar.jpeg'}],
      detailImg:[{img:'creta.jpeg'},{img:'alcasar.jpeg'},{img:'creta.jpeg'},{img:'alcasar.jpeg'}],
      contentHeading:'dupsam Lorem Ipsum',
      content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      detailContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      focusId:"content4",
      index:4,
      isEven:true,
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

  scrollTo(id:any){
      let ele:any = document.getElementById(id);
      if(ele){
        ele.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
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
