import { AppConfig } from './../../environments/environment.dev';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'img'
})
export class ImagesPipe implements PipeTransform {

  transform(img: string, type: string): string {
    return `${AppConfig.SERVICES_URL}/img/${type}/${img}`;
  }

}
