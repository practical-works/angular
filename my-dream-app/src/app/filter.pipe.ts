import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(champions: any, query: string): any {
    if (!query) {
      return champions;
    }
    query = query.trim().toLowerCase();
    return champions.filter(
      c =>
        c.id.toLowerCase().includes(query) ||
        c.name.toLowerCase().includes(query) ||
        c.title.toLowerCase().includes(query) ||
        c.blurb.toLowerCase().includes(query) ||
        c.tags
          .join(', ')
          .toLowerCase()
          .includes(query)
    );
  }
}
