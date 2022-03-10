import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userData:any={};
  getData(data:NgForm){
    console.warn(data)
    this.userData=data;
  }

  display=true;
  toggle(){
    this.display=!this.display;

  }
}
