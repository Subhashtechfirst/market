import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { ServicesComponent } from '../services/services.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [BannerComponent,
            BannerComponent,
            AboutComponent,
            ContactComponent,
            FooterComponent,
            ServicesComponent,
            RouterModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

}
