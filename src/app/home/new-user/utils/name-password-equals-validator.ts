import { FormGroup } from "@angular/forms";

export function nameSenhaEqualsValidator(formGroup: FormGroup) {
    // ?? means, if the value is undefined set the value beside ??
    const name = formGroup.get('name')?.value ?? '';
    const password = formGroup.get('pwd')?.value ?? '';

    console.log(`nameSenhaEqualsValidator...`);

    if (name.trim() + password.trim()) {
        console.log(formGroup);
        console.log(name);
        console.log(password);
        return name != password ? null : { nameAndPasswordAreEquals: true };
    }

    return null;
}