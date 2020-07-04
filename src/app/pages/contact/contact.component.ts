import { MaterialService } from './../../shared/classes/material.service';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../../shared/interfaces';
import { ContactService } from '../../shared/services/contact.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact: Contact;
  contacts: Contact[] = [];
  form: FormGroup;
  constructor(public contactService: ContactService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
    this.getContacts();
  }
  initForm() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required]
      }),
      email: new FormControl(null, {}),
      message: new FormControl(null, {
        validators: [Validators.required],
      })
    });
  }

  getContacts() {
    this.contactService
      .getContacts()
      .subscribe(data => {
        this.contacts = data;
        console.log(this.contacts);
      });
  }

  async onAddContact() {
    if (this.form.invalid) {
      return;
    }
    const contact: Contact = {
      name: this.form.value.name,
      email: this.form.value.email,
      message: this.form.value.message
    };
    await this.contactService.addContact(contact)
      .subscribe(res => {
        MaterialService.toast(res.message);
      });
    this.form.reset();
    this.router.navigate(['/home']);
  }
}
