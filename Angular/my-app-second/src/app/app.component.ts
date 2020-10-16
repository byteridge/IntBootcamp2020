
import { Component } from '@angular/core';
import { UsersListServiceService } from './service/users-list-service.service';
import { User } from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private usersList: User[];
  private selectedRow: number;
  
  constructor(private userService: UsersListServiceService){

  }

  ngOnInit(){
    this.usersList = this.userService.getUsersList();
  }

  onEdit(i):void{
    this.selectedRow = i;
    let elements = document.getElementsByTagName('tr');
    (elements[i+1].firstElementChild.children[0] as HTMLElement).focus();
  }
  onDelete(i):void{
    this.userService.deleteUser(i);
    this.usersList = this.userService.getUsersList();
  }

  isEditDisabled(rowNo): boolean{
    return typeof this.selectedRow === 'number';
  }
  isDeleteDisabled(): boolean{
    return typeof this.selectedRow === 'number';
  }
  isInputFieldReadOnly(rowNo): boolean{
    return !(this.selectedRow === rowNo);
  }
  isSaveButtonHidden(rowNo):boolean{
    return !(this.selectedRow === rowNo);
  }
  onSave():void{
    this.selectedRow = undefined;
  }

}
