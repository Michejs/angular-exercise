import { Component, OnInit, Input, Output } from '@angular/core';
import { User } from '../interface/users-interface';


@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  @Input() singleElement: User[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
