import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SpeakerModule } from '../speaker/speaker.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    
    
    
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
 
})

export class SharedModule { }
