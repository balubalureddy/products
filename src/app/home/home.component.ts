import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
