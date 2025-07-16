import { Component ,OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
 constructor() { }
 product:any=[1,2,3,4,5]
  ngOnInit(): void {
  }


   alertDeletFuntion(){
    confirm("Are You sure Do you want to delete this product")
   }
}
