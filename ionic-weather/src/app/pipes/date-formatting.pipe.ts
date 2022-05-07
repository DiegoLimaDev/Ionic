import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatting'
})
export class DateFormattingPipe implements PipeTransform {
/* eslint-disable*/
  transform(UnixTimestamp: string[], ...args: unknown[]): unknown {
    let a = new Date(+UnixTimestamp * 1000);
    let months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[a.getDay()] + ', ' + a.getDate() + ' ' + months[a.getMonth()] + ' ' + a.getHours() + ':' + a.getMinutes();
  }

}
