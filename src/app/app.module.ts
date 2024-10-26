import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './page/home/home.component';
import { ButtonComponent } from './component/button/button.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './component/card/card.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { MenuComponent } from './component/cards/menu/menu.component';
import { BlogComponent } from './component/cards/blog/blog.component';
import { OfferComponent } from './component/cards/offer/offer.component';
import { ReviewComponent } from './component/cards/review/review.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ButtonComponent,
    CardComponent,
    CarouselComponent,
    MenuComponent,
    BlogComponent,
    OfferComponent,
    ReviewComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
