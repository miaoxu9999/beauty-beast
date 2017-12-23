import { PipeTransform, Pipe } from '@angular/core';

@Pipe({name: 'privilege'})
export class Privilegepipe implements PipeTransform {
  transform(value): any {
    let result;
   switch (value) {
     case 0:
       result = '管理员';
       break;
     case 1:
       result = '书记';
       break;
     case 2:
       result = '委员';
       break;
     default:
       result = '普通党员(积极分子)';
   }

    return result;
  }
}
