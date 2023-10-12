import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allProducts:any[],term:string): any {
    return allProducts!.filter((oneProduct)=>oneProduct.title.toLowerCase().includes(term.toLowerCase()))
  }

}
