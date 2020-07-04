import { MaterialInstance } from '../../shared/classes/material.service';
import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { MaterialService } from '../../shared/classes/material.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenav', {static: false}) sidenavRef: ElementRef;
  sidenav: MaterialInstance;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    MaterialService.initSidenav(this.sidenavRef);
  }

  close() {
    this.sidenav.close();
  }

}
