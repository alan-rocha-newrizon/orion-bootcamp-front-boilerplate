//import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {


	loginForm! : FormGroup


	ngOnInit(): void {
		
		this.loginForm = new FormGroup({
			email: new FormControl('', [Validators.email, Validators.required]),
			senha: new FormControl('', [Validators.minLength(8), Validators.required]),

		});
	}

	get email() {
		return this.loginForm.get('email')!;
	}

	get senha() {
		return this.loginForm.get('senha')!;
	}

	onSubmit()  {
		if (this.loginForm.invalid) {
			return
		}

		console.log(this.loginForm.value);

		//this.http.post('link', JSON.stringify(this.loginForm.value))
			//.map(res => res)
			//.subscribe(dados = console.log(dados));
	}
}