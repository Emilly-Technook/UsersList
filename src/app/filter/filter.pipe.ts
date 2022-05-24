import { Pipe, PipeTransform, NgModule } from '@angular/core';

@Pipe({
  name: 'appFilter'
})

export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: any, searchType: any): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    searchText = searchText.toLocaleLowerCase();
    console.log("filter", searchText, searchType);

    if (searchType === 'name') {
      return items.filter(it => {
        return it.name.toLocaleLowerCase().includes(searchText);
      });
    } else if (searchType === 'role') {
      return items.filter(it => {
        return it.role.toLocaleLowerCase().includes(searchText);
      });
    } else if (searchType === 'status') {
      return items.filter(it => {
        return it.status.toLocaleLowerCase().includes(searchText);
      });
    } else if (searchType === 'createAt') {
      return items.filter(it => {
        return it.createAt.includes(searchText);
      });
    } else if (searchType === 'updateAt') {
      return items.filter(it => {
        if (it.updateAt) {
          return it?.updateAt.toLocaleLowerCase().includes(searchText);
        } else {
          return
        }
      });
    }  else {
      return items.filter(it => {
        return it.name.toLocaleLowerCase().includes(searchText);
      });

    }
  }
}


@NgModule({
  declarations: [
    FilterPipe,
  ],
  imports: [

  ],
  exports: [
    FilterPipe
  ]
})
export class FilterModule { }
