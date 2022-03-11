import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  userList = [
    {name: 'zakaria', role:'admin', date: '11/03/2022', status:'pending', email:'zakaria@test.com', img: 'https://bootdey.com/img/Content/user_1.jpg'},
    {name: 'peire', role:'member', date: '10/03/2022', status:'pending', email:'peire@test.com', img: 'https://bootdey.com/img/Content/user_2.jpg'},
    {name: 'julia', role:'member', date: '11/03/2022', status:'pending', email:'julia@test.com', img: 'https://bootdey.com/img/Content/user_3.jpg'},
    {name: 'nathan', role:'member', date: '10/03/2022', status:'pending', email:'nathan@test.com', img: 'https://bootdey.com/img/Content/user_2.jpg'},
    {name: 'yaan', role:'admin', date: '11/03/2022', status:'pending', email:'yaan@test.com', img: 'https://bootdey.com/img/Content/user_1.jpg'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
