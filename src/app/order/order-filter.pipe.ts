import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderFilter'
})
export class OrderFilterPipe implements PipeTransform {

  transform(list: any[], field: string, keyword: string): any {
    console.log(list);
    console.log('list=' + list + ';' + 'field=' + field  + ';' + 'keyword=' + keyword);
    if ( !field || !keyword) {
      return list;
    }
    return list.filter( item => {
      const itemFieldValue = item[field];
      console.log(itemFieldValue);
      return itemFieldValue.startsWith(keyword);
    });
  }

}
