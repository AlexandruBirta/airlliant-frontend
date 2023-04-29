import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {LoginService} from "./login.service";
import {User} from "../model/user.interface";
import {Router} from "@angular/router";

@Component({
    selector: 'airlliant-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    user!: User | undefined;
    loginForm!: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private loginService: LoginService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            email: [''],
            password: ['']
        })
    }

    async login() {
        console.log(this.loginForm.getRawValue());

        this.user = await this.loginService.getUser(this.loginForm.get('email')?.getRawValue());

        await this.loginService.login(
            this.user,
            this.loginForm.get('email')?.getRawValue(),
            this.loginForm.get('password')?.getRawValue()
        )

        this.loginForm.reset();

        await this.router.navigate(['../trip']);

    }

}
