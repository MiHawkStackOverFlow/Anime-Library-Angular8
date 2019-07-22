import { ValidatorFn, AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

/** A password should match the confirm password */
export const passwordConfirmValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null =>  {
      const password = control.get('password');
      const confirmPassword = control.get('confirmPassword');

      return (password && confirmPassword && password.value === confirmPassword.value) ? null : { 'passwordMismatch': true };
};
