import { Component, Input, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { RequestsService } from '../../requests/requests.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from "@angular/material/sort";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users!: any
  favority: boolean = false
  searchText: string = '';
  searchType: string = 'name';

  orderBy!: string

  pageEvent!: PageEvent;
  carregando = false;
   sortEvent!: Sort;

  constructor(
    private requestsService: RequestsService,
    public dialog: MatDialog,
  ) { }


  changeFavority(favority: boolean, id: number) {
    this.users = this.users.map((user: any) => {
      if (user.id === id) {
        user.favority = !favority;
      }
      return user;
    })
  }
  async ngOnInit(): Promise<void> {
    this.requestsService.getUsers().subscribe(
      (users: any) => {
        this.users = users
      }
    )
    const select: any = document.getElementById('select');
    select.addEventListener('change', (event: any) => {
      console.log(event.target.value); // 👉️ get selected VALUE
      if (event.target.value === 'id') {
        this.users = this.users.sort((a: any, b: any) => a.id - b.id);
      } else if (event.target.value === 'name') {
        this.users = this.users.sort((a: any, b: any) => {
          if (a.name < b.name) { return -1; }
          if (a.name > b.name) { return 1; }
          return 0;
        });
      } else if (event.target.value === 'role') {
        this.users = this.users.sort((a: any, b: any) => {
          if (a.role < b.role) { return -1; }
          if (a.role > b.role) { return 1; }
          return 0;
        });
      } else if (event.target.value === 'email') {
        this.users = this.users.sort((a: any, b: any) => {
          if (a.email < b.email) { return -1; }
          if (a.email > b.email) { return 1; }
          return 0;
        });
      } else if (event.target.value === 'status') {
        this.users = this.users.sort((a: any, b: any) => {
          if (a.status < b.status) { return -1; }
          if (a.status > b.status) { return 1; }
          return 0;
        });
      } else if (event.target.value === 'createAt') {
        this.users = this.users.sort((a: any, b: any) => a.createAt - b.createAt);
      } else if (event.target.value === 'updateAt') {
        this.users = this.users.sort((a: any, b: any) => a.updateAt - b.updateAt);
      } else if (event.target.value === 'deliveriesMade') {
        this.users = this.users.sort((a: any, b: any) => a.deliveriesMade - b.deliveriesMade);
      } else {
        return this.users;
      }
    })

  }

  async deleteUser(id: number) {
    await this.requestsService.deleteUser(id).toPromise();
    this.users = await this.requestsService.getUsers().toPromise();
  }

  updateUser(id: number): void {
    const dialogRef = this.dialog.open(UpdateUserComponent, {
      data: { id }
    })
    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
    });
  }

}
