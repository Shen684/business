import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main-page/header/header.component';
import { MainComponent } from './main-page/main/main.component';
import { FooterComponent } from './main-page/footer/footer.component';
import { UiSwitchModule } from 'ngx-ui-switch';
import { FavoritComponent } from './main-page/main/favorit/favorit.component';
import { TechnologiesComponent } from './main-page/main/technologies/technologies.component';
import { ReviewsComponent } from './main-page/main/reviews/reviews.component';
import { FormComponent } from './main-page/main/form/form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    FavoritComponent,
    TechnologiesComponent,
    ReviewsComponent,
    FormComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    UiSwitchModule
    .forRoot({
      size: 'small',
      // switchColor: '#80FFA2',
      defaultBgColor: '#00ACFF',
      // defaultBoColor : '#4E86C8',
      // checkedLabel: 'on',
      // uncheckedLabel: 'off'
    }),
    HttpClientModule,
    NgxUsefulSwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
