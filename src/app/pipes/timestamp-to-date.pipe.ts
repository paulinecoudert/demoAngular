import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestampToDate'
})
export class TimestampToDatePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    const date= new Date(value);
    return `${date.getDate()}/${date.getMonth()+1}/${date.getUTCFullYear()}
    ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}}`;
  }

}
