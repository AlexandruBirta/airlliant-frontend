import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {LoginService} from "./login.service";
import {Router} from "@angular/router";
import {NavService} from "../nav/nav.service";

@Component({
    selector: 'airlliant-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm!: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private loginService: LoginService,
                private router: Router,
                private navService: NavService) {
    }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            email: [''],
            password: ['']
        })
        this.navService.checkLoginState();
    }

    login() {

        this.loginService.login(
            this.loginForm.get('email')?.value,
            this.loginForm.get('password')?.value
        )

        this.loginForm.reset();

        this.navService.checkLoginState();

        this.router.navigate(['../home']);

    }

}
