import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../model/user.interface";
import {APP_CONFIG} from "../app-config/app-config.service";

@Injectable({
    providedIn: 'root'
})
export class RegisterService {

    user: User = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }

    constructor(private expenseTrackerClient: HttpClient) {
    }

    register(firstName: string,
             lastName: string,
             email: string,
             password: string
    ) {

        this.user.firstName = firstName;
        this.user.lastName = lastName;
        this.user.email = email;
        this.user.password = password;

        console.log(this.user);

        this.expenseTrackerClient.post(`${APP_CONFIG.apiBaseUrl}/${APP_CONFIG.usersPath}`, this.user).subscribe(() => {
        });
    }

}
