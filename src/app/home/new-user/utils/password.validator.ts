import { AbstractControl } from "@angular/forms";

export function passwordValidator(control: AbstractControl) {
    const REGEX = new RegExp('([A-Za-z]*)([0-9]*)([\@\!\-\_]*)');
    const value = control.value as string;

    // console.log(value);
    // console.log(REGEX.test(value));
    
    return !REGEX.test(value) ? { passwordValidator: true } : null;
}