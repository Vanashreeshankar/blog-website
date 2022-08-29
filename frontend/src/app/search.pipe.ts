import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, searchPost: any) :any{
    if(value.length === 0){
      return value;
    }
    return value.filter(function(search: { title: string | any[]; }){
      return search.title.indexOf(searchPost.toLowerCase())  > -1
    })
    
  }

}
