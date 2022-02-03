import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../interface/users-interface';


@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  @Input() singleElement: User[] = [];
  @Output() userDelete = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }
  dltElement(user: User) {
    this.userDelete.emit({ ...user })
  }
}

