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
            username: [''],
            password: ['']
        })
    }

    async login() {

        await this.loginService.login(
            this.loginForm.get('username')?.getRawValue(),
            this.loginForm.get('password')?.getRawValue()
        )

        this.loginForm.reset();

        await this.router.navigate(['../home']);

    }

}
