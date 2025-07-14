import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-update-banner',
  imports: [RouterModule],
  templateUrl: './update-banner.component.html',
  styleUrl: './update-banner.component.css'
})
export class UpdateBannerComponent implements OnInit{
 constructor() { }
 product:any=[1,2,3,4,5,6,7]
  ngOnInit(): void {
  }


   alertDeletFuntion(){
    confirm("Are You sure Do you want to delete this product")
   }
}
