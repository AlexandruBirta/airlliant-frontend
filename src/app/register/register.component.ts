import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RegisterService} from "./register.service";
import {RegisterValidator} from "./validators/register-validator";
import {HttpErrorResponse} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
    selector: 'airlliant-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    registerForm!: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private registerService: RegisterService,
                private _snackBar: MatSnackBar,
                private router: Router
    ) {
    }

    ngOnInit(): void {

        this.registerForm = this.formBuilder.group({
                firstName: ['', {
                    validators: [Validators.required]
                }],
                lastName: ['', {
                    validators: [Validators.required]
                }],
                email: ['', {
                    validators: [Validators.required, Validators.email]
                }],
                password: ['', {
                    validators: [Validators.required]
                }],
                confirmPassword: ['', {
                    validators: [Validators.required, RegisterValidator.validateMatchingPasswords]
                }]
            },
            {
                // updateOn: 'blur',
                validators: [
                    RegisterValidator.validateMatchingPasswords
                ]
            })

    }


    register($event: MouseEvent) {

        $event.preventDefault();

        let firstName = this.registerForm.get('firstName')?.value;
        let lastName = this.registerForm.get('lastName')?.value;
        let email = this.registerForm.get('email')?.value;
        let password = this.registerForm.get('password')?.value;

        this.registerService.register(
            firstName,
            lastName,
            email
        ).subscribe(
            (data) => {
                this.registerService.postKeycloakUser(firstName, lastName, email, password);
                return data;
            },
            (error: HttpErrorResponse) => {

                console.log(error);

                if (error.status === 400) {

                    this.registerForm.get('email')?.setErrors({
                        userAlreadyExists: true
                    });

                    this._snackBar.open(`User with email ${email} already exists!`, '', {
                        duration: 3000
                    });


                } else if (error.status !== 201) {

                    this._snackBar.open(`Application encountered an unexpected error.`, '', {
                        duration: 3000
                    });

                }

            });

        this.router.navigate(['../login']).then(r => r);

    }

}
