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
      name: 'Софія 1',
      age: 6,
      skills: 'Грає добре, співає не дуже',
      program: 'Зірочка тричі на день',
      plans: 'Хочу, щоб грав як Шопен'
    },
    {
      name: 'Софія 2',
      age: 6,
      skills: 'Грає добре, співає не дуже',
      program: 'Зірочка тричі на день',
      plans: 'Хочу, щоб грав як Шопен'
    },
    {
      name: 'Софія 3',
      age: 6,
      skills: 'Грає добре, співає не дуже',
      program: 'Зірочка тричі на день',
      plans: 'Хочу, щоб грав як Шопен'
    },
    {
      name: 'Софія 4',
      age: 6,
      skills: 'Грає добре, співає не дуже',
      program: 'Зірочка тричі на день',
      plans: 'Хочу, щоб грав як Шопен'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  addStudent() {
    const newStudent = {
      name: '',
      age: 0,
      skills: '',
      program: '',
      plans: ''
    }
    this.students.push(newStudent);
  }

  deleteStudent(index) {
    this.students.splice(index, 1);
  }

}
