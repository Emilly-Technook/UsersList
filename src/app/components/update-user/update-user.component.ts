import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersComponent } from '../List-users/users.component';
import { RequestsService } from 'src/app/requests/requests.service';

export interface DialogData {
  id: number;
}
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  user!:any

  constructor(
    public dialogRef: MatDialogRef<UsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private requestsService: RequestsService
  ) { }

  ngOnInit(): void {
    console.log(this.data)
    this.requestsService.findUser(this.data.id).subscribe(
      (response) => {
        console.log(response)
        this.user = response
      }
    )
  }
  updateUser(){
    this.requestsService.updateUser(this.user).subscribe(
      (response) => {
        console.log(response)
        this.dialogRef.close()
      }
    )
  }

}
