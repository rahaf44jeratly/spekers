import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllSpeakersComponent } from './all-speakers/all-speakers.component';
import { SpeakerDetialsComponent } from './speaker-detials/speaker-detials.component';



@NgModule({
  declarations: [
    AllSpeakersComponent,
    SpeakerDetialsComponent
    
  ],
  imports: [
    CommonModule,
    
  ],
  exports:[
    AllSpeakersComponent,
    SpeakerDetialsComponent

  ]
   
})
export class SpeakerModule { }
