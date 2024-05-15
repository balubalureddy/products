import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  date:Date= new Date();
  a:any= 0.250;
  b:any= 1.369;
  constructor(private activatedRoute : ActivatedRoute, private route : Router){

  }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param)=>{
      console.log(param)
    })
    console.log(this.route.url)
  }

  changeRoute(){
    this.route.navigate(['/view-product'],{queryParams:{page:"this mesasge is from home", source:"on button click"}})
  }
}
