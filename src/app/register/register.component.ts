import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {RegisterService} from "./register.service";

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
            firstName: [''],
            lastName: [''],
            email: [''],
            password: ['']
        })

    }

    register() {

        console.log(this.registerForm.getRawValue());


        this.registerService.register(
            this.registerForm.get('firstName')?.getRawValue(),
            this.registerForm.get('lastName')?.getRawValue(),
            this.registerForm.get('email')?.getRawValue(),
            this.registerForm.get('password')?.getRawValue(),
        );
    }

}
