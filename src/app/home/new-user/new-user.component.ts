import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewUser } from './models/new-user';
import { NewUserService } from './services/new-user.service';
import { nameSenhaEqualsValidator } from './utils/name-password-equals-validator';
import { passwordValidator } from './utils/password.validator';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  newUserForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private newUserService: NewUserService,
    private router: Router) { }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      // field validators
      name: ['', [Validators.required, Validators.minLength(3)]],
      role: ['', [Validators.required]],
      pwd: ['', [Validators.required, Validators.minLength(6), passwordValidator]] 
    },
      // form validators
    {
      validators: [nameSenhaEqualsValidator]
    });
  }

  create() {
    const newUser = this.newUserForm.getRawValue() as NewUser;
    console.log(newUser);

    if (this.newUserForm.valid) {
      this.newUserService.createNewUser(newUser).subscribe(() => {
        this.router.navigate(['']);
      }, 
      (err) => {
        console.error(err);
      });
    }
  }

}
