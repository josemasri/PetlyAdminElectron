import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrPipe } from './qr.pipe';
import { ImagesPipe } from './images.pipe';



@NgModule({
  declarations: [
    QrPipe,
    ImagesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    QrPipe,
    ImagesPipe
  ]
})
export class PipesModule { }
