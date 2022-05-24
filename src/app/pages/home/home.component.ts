import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CreateUserComponent } from 'src/app/components/create-user/create-user.component';
import { RequestsService } from 'src/app/requests/requests.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users!: any
  orderBy!: string
  userOrder!: any

  constructor(public dialog: MatDialog) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateUserComponent, {
      // width: '250px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  async ngOnInit(): Promise<void> {
    // this.users = await this.requestsService.getUsers().toPromise();
    // console.log(this.users);

    // const select: any = document.getElementById('select');
    // select.addEventListener('change', (event: any) => {
    //   console.log(event.target.value); // 👉️ get selected VALUE
    //   if (event.target.value === 'id') {
    //     this.users  = this.users.sort((a: any, b: any) => a.id - b.id);
    //   }
    //   console.log("usuarios ordenados", this.users);

    // })

  }

}
