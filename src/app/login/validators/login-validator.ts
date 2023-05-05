import {FormGroup} from "@angular/forms";

export class LoginValidator {

    static validateMatchingPasswords(control: FormGroup) {

        const password: any = control.get('password')?.value;
        const confirmPassword: any = control.get('confirmPassword')?.value;

        if (password !== confirmPassword) {

            control.get('confirmPassword')?.setErrors({
                passwordsNotMatching: true
            });

            return {
                passwordsNotMatching: true
            };

        }

        return null;

    }
}

