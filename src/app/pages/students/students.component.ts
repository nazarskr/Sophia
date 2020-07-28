import { Component, OnInit } from '@angular/core';
import {Student} from "../../shared/interfaces";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  students: Student[] = [
    {
      name: 'Софія',
      age: 6,
      skills: 'Грає добре, співає не дуже',
      program: 'Зірочка тричі на день',
      plans: 'Хочу, щоб грав як Шопен'
    },
    {
      name: 'Софія',
      age: 6,
      skills: 'Грає добре, співає не дуже',
      program: 'Зірочка тричі на день',
      plans: 'Хочу, щоб грав як Шопен'
    },
    {
      name: 'Софія',
      age: 6,
      skills: 'Грає добре, співає не дуже',
      program: 'Зірочка тричі на день',
      plans: 'Хочу, щоб грав як Шопен'
    },
    {
      name: 'Софія',
      age: 6,
      skills: 'Грає добре, співає не дуже',
      program: 'Зірочка тричі на день',
      plans: 'Хочу, щоб грав як Шопен'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
