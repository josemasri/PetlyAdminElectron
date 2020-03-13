import { AppConfig } from './../../environments/environment.dev';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'qr'
})
export class QrPipe implements PipeTransform {

  transform(id: number): string {
    return `${AppConfig.SERVICES_URL}/qr/${id}.png`;
  }

}
