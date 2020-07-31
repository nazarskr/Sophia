import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MaterialInstance, MaterialService} from "../../shared/classes/material.service";
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, AfterViewInit {
  @ViewChild('dayModal', {static: false}) dayModalRef: ElementRef;
  dayModal: MaterialInstance;
  currentMonth: any;
  monthStart: any;
  monthDays = [];
  ukrainianWeek = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота', 'Неділя']

  constructor() { }

  ngOnInit() {
    this.currentMonth = moment();
    this.setDaysNumbers(this.currentMonth);
  }

  ngAfterViewInit() {
    this.dayModal = MaterialService.initModal(this.dayModalRef);
  }

  openModal (value) {
    this.dayModal.open();
  }

  closeModal() {
    this.dayModal.close();
  }

  plusMonth() {
    this.currentMonth.add(1, 'M');
    this.setDaysNumbers(this.currentMonth);
  }

  minusMonth() {
    this.currentMonth.subtract(1, 'M');
    this.setDaysNumbers(this.currentMonth);
  }

  setDaysNumbers(month) {
    const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    this.monthDays = [];
    this.monthStart = month.startOf('month');
    for (let i = 0; i < month.daysInMonth(); i++) {
      this.monthDays.push(this.monthStart.clone().add(i,'days'));
    }

    const firstDayIndex = dayNames.indexOf(this.monthStart.format('dddd'));
    const lastDay = this.monthDays[this.monthDays.length - 1];
    const lastDayIndex = dayNames.indexOf(lastDay.format('dddd'));

    for (let i = 0; i < firstDayIndex; i++) {
      this.monthDays.unshift(this.monthStart.clone().subtract(i + 1,'days'));
    }

    for (let i = 1; i < 7 - lastDayIndex; i++) {
      this.monthDays.push(lastDay.clone().add(i,'days'));
    }
  }

}
