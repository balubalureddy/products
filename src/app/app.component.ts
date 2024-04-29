import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'products project';
  username:string="Jhon";
  handleChange(event:any){
    console.log(event)
    this.username = event
  }
}
