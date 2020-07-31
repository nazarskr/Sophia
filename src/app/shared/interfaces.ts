export interface Contact {
    _id?: any;
    name: string;
    email?: string;
    message: string;
}

export interface Video {
    _id?: any;
    title: string;
    url: string;
}

export interface Lesson {
  _id?: any;
  name: string;
  time: Date;
  completed: boolean;
}

export interface Workhour {
  _id?: any;
  booked: boolean;
  possible: boolean;
}

export interface Student {
  _id?: any;
  name: string;
  age: number;
  skills: string;
  program: string;
  plans: string;
}
