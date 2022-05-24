import { Component, Inject, OnInit } from '@angular/core';
import { RequestsService } from 'src/app/requests/requests.service';
import { User } from './user';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  user: User = new User
  constructor(private requestsService: RequestsService) { }

  createUser(){
    console.log(this.user)
    this.requestsService.createUser(this.user).subscribe(
      (response) => {
        console.log("createUser",response)
      }
    )
  }
  ngOnInit(): void {
  }

}
