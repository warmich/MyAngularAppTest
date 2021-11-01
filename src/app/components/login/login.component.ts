import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	message: string = 'Vous êtes déconnecté !'
	name!: string
	password!: string

	constructor(public readonly _authService: AuthService, public readonly _router: Router) { }

	ngOnInit(): void {
	}

	// Informe l'utilisateur sur son authentfication.
	setMessage() {
		this.message = this._authService.isLoggedIn ? 'Vous êtes connecté.' : 'Identifiant ou mot de passe incorrect.'
	}

	// Connecte l'utilisateur auprès du Guard
	login() {
		this.message = 'Tentative de connexion en cours ...'
		this._authService.login(this.name, this.password).subscribe(() => {
			this.setMessage()
			if (this._authService.isLoggedIn) {
				// Récupère l'URL de redirection depuis le service d'authentification
				// Si aucune redirection n'a été définis, redirige l'utilisateur vers la liste des pokemons.
				let redirect = this._authService.redirectUrl ? this._authService.redirectUrl : '/skills'
				// Redirige l'utilisateur
				this._router.navigate([redirect])
			} else {
				this.password = ''
			}
		})
	}

	// Déconnecte l'utilisateur
	logout() {
		this._authService.logout()
		this.setMessage()
	}
}

// +++++++++++++++++++++++++++++++ remettre en PRIVATE ++++++++++++++++++++++++++++++++++++

// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from 'src/app/services/auth.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   message: string = 'Vous êtes déconnecté !'
// 	private name!: string
// 	private password!: string

// 	constructor(private _authService: AuthService, private _router: Router) { }

//   ngOnInit(): void {
//   }

//   // Informe l'utilisateur sur son authentfication.
// 	setMessage() {
// 		this.message = this._authService.isLoggedIn ? 'Vous êtes connecté.' : 'Identifiant ou mot de passe incorrect.'
// 	}

// 	// Connecte l'utilisateur auprès du Guard
// 	login() {
// 		this.message = 'Tentative de connexion en cours ...'
// 		this._authService.login(this.name, this.password).subscribe(() => {
// 			this.setMessage()
// 			if (this._authService.isLoggedIn) {
// 				// Récupère l'URL de redirection depuis le service d'authentification
// 				// Si aucune redirection n'a été définis, redirige l'utilisateur vers la liste des pokemons.
// 				let redirect = this._authService.redirectUrl ? this._authService.redirectUrl : '/skills'
// 				// Redirige l'utilisateur
// 				this._router.navigate([redirect])
// 			} else {
// 				this.password = ''
// 			}
// 		})
// 	}

// 	// Déconnecte l'utilisateur
// 	logout() {
// 		this._authService.logout()
// 		this.setMessage()
// 	}
// }