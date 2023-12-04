import { Component } from '@angular/core';
import { AnimationBuilder, AnimationFactory, AnimationPlayer } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private AnimationBuilder:AnimationBuilder){

  }

  ngOnInit(){
    this.slideShowAnimate();
  }

  slideShowAnimate(){
    let slide1 = document.getElementById("slide1");
    // let anime = this.AnimationBuilder.build()
  }

}
