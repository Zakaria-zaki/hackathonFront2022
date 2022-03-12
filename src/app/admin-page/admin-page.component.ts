import { Component, OnInit } from '@angular/core';
import {FlatfileMethods} from "@flatfile/angular";
import {NgForm} from "@angular/forms";
// import { fs } from 'fs';
import { NgChartsModule } from 'ng2-charts';



@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit{

  licenseKey = '4171f0b4-5f5c-4b32-a008-356ebb813e4e';
  settings = {
    type: "test import",
    fields: [
      { label: "score_skinbiosense", key: "Score_skinbiosense" },
      { label: "value_score_skinbiosense", key: "value_score_skinbiosense" }
    ],
    managed: true
  }
  customer = { userId: "12345" };

  fileName = "";

  userList = [
    {name: 'zakaria', role:'admin', date: '11/03/2022', status:'pending', email:'zakaria@test.com', img: 'https://bootdey.com/img/Content/user_1.jpg'},
    {name: 'peire', role:'member', date: '10/03/2022', status:'pending', email:'peire@test.com', img: 'https://bootdey.com/img/Content/user_3.jpg'},
    {name: 'julia', role:'member', date: '11/03/2022', status:'pending', email:'julia@test.com', img: 'https://bootdey.com/img/Content/user_2.jpg'},
    {name: 'nathan', role:'member', date: '10/03/2022', status:'pending', email:'nathan@test.com', img: 'https://bootdey.com/img/Content/user_1.jpg'},
    {name: 'yaan', role:'admin', date: '11/03/2022', status:'pending', email:'yaan@test.com', img: 'https://bootdey.com/img/Content/user_3.jpg'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  readFile(f: NgForm) {
    this.fileName = f.value['files'];

    // const matches = fs.readFileSync(this.fileName, {encoding: 'utf-8'});
    // console.log(matches);
  }

}
