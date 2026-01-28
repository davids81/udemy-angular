import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IUser } from './user.model'
import { Card } from "../shared/card/card";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  // @Input ({ required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  @Input({ required: true}) selected!: boolean;
  @Input({required: true}) user!: IUser;
  @Output() select = new EventEmitter<string>();



  onSelectUser() {
    this.select.emit(this.user.id)
   } 
}
