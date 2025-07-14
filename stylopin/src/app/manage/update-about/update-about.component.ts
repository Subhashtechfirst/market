import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-update-about',
  imports: [RouterModule],
  templateUrl: './update-about.component.html',
  styleUrl: './update-about.component.css'
})
export class UpdateAboutComponent implements OnInit{
 constructor() { }
 product:any=[1,2,3,4,5,6,7]
  ngOnInit(): void {
  }


   alertDeletFuntion(){
    confirm("Are You sure Do you want to delete this product")
   }
}
