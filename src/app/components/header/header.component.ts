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
  public userIsConnected: boolean
  @Input() title: string

  constructor() {
    this.userIsConnected = false
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
    this.userIsConnected = window.localStorage.getItem('user-token') ? true : false
  }

  public logoutUser = () => {
    window.localStorage.removeItem('user-token')
    this.activeNav = this.unLoggedNav
    this.userIsConnected = false
  }

  ngOnInit() {
    this.checkUserToken()
  }

}
