import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";

@Component({
    selector: 'airlliant-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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

    login() {

        this.loginService.login(
            this.loginForm.get('username')?.value,
            this.loginForm.get('password')?.value
        )

        this.loginForm.reset();

        this.router.navigate(['../home']);

    }

}
