import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { VideosComponent } from './pages/videos/videos.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmbedVideoComponent } from './pages/videos/embed-video/embed-video.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmbedVideo } from 'ngx-embed-video';
import { CalendarComponent } from './components/calendar/calendar.component';
import { StudentsComponent } from './pages/students/students.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ScheduleComponent,
    VideosComponent,
    ContactComponent,
    EmbedVideoComponent,
    CalendarComponent,
    StudentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EmbedVideo.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
