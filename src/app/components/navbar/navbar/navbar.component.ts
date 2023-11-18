import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopUpHowToPlayComponent } from '../../pop-up-how-to-play/pop-up-how-to-play.component';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private currentRoute = '';

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private tokenService: TokenService
  ) {}

  public ngOnInit(): void {
    this.currentRoute = this.router.url;
  }

  /**
   * Verifica se a página atual é a página de login.
   * @returns True se a página atual é a página de login, caso contrário, False.
   */
  public isLoginPage(): boolean {
    return this.currentRoute === '/login';
  }

  /**
   * Verifica se a página atual é a página de cadastro.
   * @returns True se a página atual é a página de cadastro, caso contrário, False.
   */
  public isSignUpPage(): boolean {
    return [
      '/sign-up',
      '/auth/reset-password',
      '/registration-success',
      '/registration-failure',
      '/reset-password-success',
      '/reset-password-failure'
    ].includes(this.currentRoute);
  }

  /**
   * Função responsável por ocultar/exibir itens e aplicar classes no caso da página ser start-game.
   * @returns
   */
  public isStartGamePage(): boolean {
    return this.currentRoute === '/start-game';
  }

  /**
   * Função responsável por abrir o modal de forgotPassword
   */
  public openModalHowToPlay(): void {
    const dialogRef = this.dialog.open(PopUpHowToPlayComponent, {
      width: '500px',
      height: '100%',
      panelClass: 'custom__modal',
      disableClose: false,
      position: {
        right: '0'
      },
      exitAnimationDuration: 6000
    });

    dialogRef.beforeClosed().subscribe(() => {
      dialogRef.addPanelClass('modal__closed');
    });
  }

  /**
   * Função responsável por fazer o logout, deletar o token e redirecionar o usuário para a página de login
   */
  public logout(): void {
    this.tokenService.delete();
    this.router.navigate(['/login']);
  }
}
