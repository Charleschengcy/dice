import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { Shake } from '@ionic-native/shake';
import { NativeAudio } from '@ionic-native/native-audio';
import { AnimationService, AnimationBuilder } from 'css-animator';
// import { StreamingMedia, StreamingAudioOptions, StreamingVideoOptions } from '@ionic-native/streaming-media';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  times:number = 0;
  sum:number[] = [0, 0, 0, 0, 0, 0];
  max:number;
  random: number[] = [];
  array: string[] = [];
  private animator: AnimationBuilder[] = [];

  @ViewChild('myElement1') myElem1;
  @ViewChild('myElement2') myElem2;
  @ViewChild('myElement3') myElem3;
  @ViewChild('myElement4') myElem4;
  @ViewChild('myElement5') myElem5;
  @ViewChild('myElement6') myElem6;

  src:string[] = ['assets/imgs/s1.jpg','assets/imgs/s1.jpg','assets/imgs/s1.jpg','assets/imgs/s1.jpg', 'assets/imgs/s1.jpg', 'assets/imgs/s1.jpg'];
  
  
  constructor(public navCtrl: NavController, 
    private platform: Platform, 
    private shake: Shake,
    private nativeAudio:NativeAudio,
    private animationService: AnimationService) 
    {
      for ( let i = 0; i < 6; i++){
       this.animator[i] = animationService.builder();
      }
      this.nativeAudio.preloadSimple('shake', 'assets/audio/shake.mp3').then(
        function(){
          console.log("success preload");
        },function(){
          console.log(' preload Audio error!');
        });
    }

  ngOnInit(){
    this.platform.ready().then(()=> {        
      this.shake.startWatch(20).subscribe(()=> {        
        this.getArray();
      });
    })
  }

  getArray(){
    this.times ++;
    for ( let i = 0; i < 6; i++){
      this.sum[i] = 0;
    }
    this.array = [
      'assets/imgs/s1.jpg',
      'assets/imgs/s2.jpg',
      'assets/imgs/s3.jpg',
      'assets/imgs/s4.jpg',
      'assets/imgs/s5.jpg',
      'assets/imgs/s6.jpg'
    ];

    this.max = 0;
    for ( let i = 0; i < 6; i++){
      this.random[i] = Math.floor(Math.random()*6);
      this.src[i] = this.array[this.random[i]];

      switch( this.random[i] ){
        case 0: this.sum[0]++;
        if( this.sum[0] > this.max ){
          this.max = this.sum[0];
        }
                break;
        case 1: this.sum[1]++;
        if( this.sum[1] > this.max ){
          this.max = this.sum[1];
        }break;
        case 2: this.sum[2]++;
        if( this.sum[2] > this.max ){
          this.max = this.sum[2];
        }break;
        case 3: this.sum[3]++;
        if( this.sum[3] > this.max ){
          this.max = this.sum[3];
        }break;
        case 4: this.sum[4]++;
        if( this.sum[4] > this.max ){
          this.max = this.sum[4];
        }break;
        case 5: this.sum[5]++;
        if( this.sum[5] > this.max ){
          this.max = this.sum[5];
        }break;
        default:break;
      }    
      console.log('max is :'+this.max);

    }
    this.playAudio();
    this.animateElem();
  }

  getSum(){
    
  }

  playAudio(){
    
    this.nativeAudio.play('shake').then(
      function(){
        console.log('succeed!play');
      },function(){
        console.log('error playAudio!');
      }
    );
  }

  animateElem(){
 
    this.animator[0].setType('wobble').show(this.myElem1.nativeElement);
    this.animator[1].setType('rubberBand').show(this.myElem2.nativeElement);
    this.animator[2].setType('swing').show(this.myElem3.nativeElement);
    this.animator[3].setType('flipInY').show(this.myElem4.nativeElement);
    this.animator[4].setType('flip').show(this.myElem5.nativeElement);
    this.animator[5].setType('rotateIn').show(this.myElem6.nativeElement);
   
  }

  Clear(){
    this.times = 0;
  }

}
