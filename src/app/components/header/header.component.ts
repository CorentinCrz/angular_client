import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  public loggedNav: Array<any>
  public unLoggedNav: Array<any>
  public activeNav: Array<any>
  @Input() title: string

  constructor() {
    this.unLoggedNav = [
      {
        value: 'Accueil',
        path: '/'
      },
      {
        value: 'Inscription',
        path: '/register'
      },
      {
        value: 'Connexion',
        path: '/login'
      }
    ]

    this.loggedNav = [
      {
        value: 'Accueil',
        path: '/'
      },
      {
        value: 'Mon Compte',
        path: '/user'
      }
    ]
  }

  private checkUserToken = () => {
    this.activeNav = window.localStorage.getItem('user-token') ? this.loggedNav : this.unLoggedNav
  }

  ngOnInit() {
    this.checkUserToken()
  }

}
