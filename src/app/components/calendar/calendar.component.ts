import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MaterialInstance, MaterialService} from "../../shared/classes/material.service";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, AfterViewInit {
  @ViewChild('dayModal', {static: false}) dayModalRef: ElementRef;
  dayModal: MaterialInstance;

  weeks = [1, 2, 3, 4];
  days = [1,2,3,4,5,6,7];
  modalValue: number;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    MaterialService.initModal(this.dayModalRef);
  }

  openModal (value) {
    this.modalValue = value;
    this.dayModal.open();
  }

  closeModal() {
    this.dayModal.close();
  }

}
