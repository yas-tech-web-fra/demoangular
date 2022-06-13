import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { UserComponent } from './components/user/user.component';
import { CarteVisiteComponent } from './components/carte-visite/carte-visite.component';
import { AlertButtonComponent } from './components/alert-button/alert-button.component';
import { ListComponent } from './components/list/list.component';
import { MagieComponent } from './components/magie/magie.component';
import { ListFiltreComponent } from './components/list-filtre/list-filtre.component';
import { HiddenComponent } from './components/hidden/hidden.component';
import { ShowDateComponent } from './components/show-date/show-date.component';
import { GenericAlertButonComponent } from './components/generic-alert-buton/generic-alert-buton.component';
import { ButtonMenuComponent } from './components/button-menu/button-menu.component';
import { ShowHourComponent } from './components/show-hour/show-hour.component';
import { TimeZoneComponent } from './components/time-zone/time-zone.component';
import { HorlogeComponent } from './components/horloge/horloge.component';
import { ClockMenuComponent } from './components/clock-menu/clock-menu.component';
import { ListeCourseComponent } from './components/liste-course/liste-course.component';
import { ReactiveListeCoursesComponent } from './components/reactive-liste-courses/reactive-liste-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    UserComponent,
    CarteVisiteComponent,
    AlertButtonComponent,
    ListComponent,
    MagieComponent,
    ListFiltreComponent,
    HiddenComponent,
    ShowDateComponent,
    GenericAlertButonComponent,
    ButtonMenuComponent,
    ShowHourComponent,
    TimeZoneComponent,
    HorlogeComponent,
    ClockMenuComponent,
    ListeCourseComponent,
    ReactiveListeCoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
