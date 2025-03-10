import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  userForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  // constructor(private router: Router) {} 

  router = inject(Router)

  onLogin() {
    const formValue = this.userForm.value;

    if (formValue.username == 'admin' && formValue.password == '1234567') {
      this.router.navigateByUrl('dashboard'); // Use router to navigate
    } else {
      alert('Wrong credentials');
    }
  }
}
