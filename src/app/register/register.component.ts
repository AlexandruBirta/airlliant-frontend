import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RegisterService} from "./register.service";
import {LoginValidator} from "../login/validators/login-validator";

@Component({
    selector: 'airlliant-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    registerForm!: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private registerService: RegisterService
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
                    validators: [Validators.required, LoginValidator.validateMatchingPasswords]
                }]
            },
            {
                // updateOn: 'blur',
                validators: [
                    LoginValidator.validateMatchingPasswords
                ]
            })

    }

    register($event: MouseEvent) {

        $event.preventDefault();

        this.registerService.register(
            this.registerForm.get('firstName')?.value,
            this.registerForm.get('lastName')?.value,
            this.registerForm.get('email')?.value,
            this.registerForm.get('password')?.value,
        );

    }

}
