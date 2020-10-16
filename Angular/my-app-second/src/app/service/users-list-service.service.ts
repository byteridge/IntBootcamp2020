import { Injectable } from '@angular/core';
import { User } from '../models/User';
import list from 'src/constants/userlist';

@Injectable({
  providedIn: 'root'
})
export class UsersListServiceService {
  private usersList: User[] = [];
  private modifiedList;

  constructor() { }

  public getUsersList(): User[]{
    this.usersList = this.modifiedList || list
    return this.usersList;
  }
  public deleteUser(userNo):void{
    this.modifiedList = this.usersList.filter((user,index)=>{
      if(index !== userNo) return true;
    })
  }
}
