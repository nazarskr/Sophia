import { MaterialInstance } from './../../shared/classes/material.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MaterialService } from '../../shared/classes/material.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('', {static: false}) sidenavRef: ElementRef;
  sidenav: MaterialInstance;

  constructor() { }

  ngOnInit() {
    MaterialService.initSidenav(this.sidenavRef);
  }

  close() {
    this.sidenav.close();
  }

}
