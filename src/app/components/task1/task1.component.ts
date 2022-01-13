import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../user-service.service';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {

  data:any=[];
  constructor(private user:UserServiceService) {
    this.user.getData().subscribe(data=>{
      console.log({data});
      this.data=data;
    })
   }

  ngOnInit(): void {
  }

}
