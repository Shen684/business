import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, 
        FooterComponent, 
        ReviewsComponent, 
        FavoritComponent,
        FormComponent,
        TechnologiesComponent
      } from './index';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { UiSwitchModule } from 'ngx-ui-switch';
// import { FormComponent } from './main/form/form.component';
// import { TechnologiesComponent } from './main/technologies/technologies.component';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ReviewsComponent,
    FavoritComponent,
    FormComponent,
    TechnologiesComponent,
    MainComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    UiSwitchModule
    .forRoot({
      size: 'small',
      // switchColor: '#80FFA2',
      defaultBgColor: '#00ACFF',
      // defaultBoColor : '#4E86C8',
      // checkedLabel: 'on',
      // uncheckedLabel: 'off'
    }),
    NgxUsefulSwiperModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ReviewsComponent,
    FavoritComponent,
    FormComponent,
    TechnologiesComponent,
    MainComponent
    // UiSwitchModule

  ]
  
})
export class MainCustomModule { }
