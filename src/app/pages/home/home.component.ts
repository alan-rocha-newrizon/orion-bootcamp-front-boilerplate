import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
	constructor(private router: Router) {}

	/**
	 * Navigates to the meteorology page.
	 *
	 * @return {void}
	 */
	public goToMeteorology(): void {
		this.router.navigate(['meteorology']);
	}
}
