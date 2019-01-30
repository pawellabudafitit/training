import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {User} from "../../model/User";
import {FormBuilder, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  @Output('new-user')
  userEmitter: EventEmitter<User> = new EventEmitter();

  userForm: FormGroup;
  @ViewChild('formDirective') private formDirective: NgForm; // form reset workaround

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  emitUser() {
    this.userEmitter.emit(this.userForm.value);
    this.formDirective.resetForm();
  }
}
