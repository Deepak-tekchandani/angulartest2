import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to second Dummy project of angular';

  name='deepak'
  color='green';
  bgColor='yellow'
  updateColor(){
    this.color='blue'
    this.bgColor='orange'
  }

  users=['Deepak','Satia','Zohib','Sarmad','Wadho'];
  userDetails=[
    {name:"Deepak",email:"deepaktekchandnai143@gmail.com",phone:"143"},
    {name:"Satia",email:"satia@gmail.com",phone:"123"},
    {name:"Zohib",email:"zohib@gmail.com",phone:"456"},
    {name:"Sarmad",email:"sarmad@gmail.com",phone:"789"},
    {name:"Wadho",email:"wadho@gmail.com",phone:"147"}
  ]

  usersInfo=[
    {name:"Deepak",email:"deepakte@gmail.com",phone:"143" ,developer :['Java','Python','PHP','Mobile']},
    {name:"Satia",email:"satia@gmail.com",phone:"123", developer :['Java','Python','PHP','Mobile']},
    {name:"Zohib",email:"zohib@gmail.com",phone:"456", developer :['Java','Python','PHP','Mobile']},
    {name:"Sarmad",email:"sarmad@gmail.com",phone:"789", developer :['Java','Python','PHP','Mobile']},
    {name:"Wadho",email:"wadho@gmail.com",phone:"147", developer :['Java','Python','PHP','Mobile']}
  ]

}
