import { Component } from '@angular/core';
import { UiLink } from '@kikstart-ui/ui-link';

@Component({
  template: `
    <web-layout>
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" routerLink="/">
            <img [attr.src]="logo" height="30" class="d-inline-block align-top" alt="" />
            {{ title }}
          </a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <ng-container *ngFor="let link of links">
                <li
                  class="nav-item mr-2"
                  routerLinkActive="text-primary"
                  [routerLinkActiveOptions]="{ exact: true }"
                >
                  <a [routerLink]="link.path">{{ link.label }}</a>
                </li>
              </ng-container>
            </ul>
          </div>
        </nav>
      </header>
      <router-outlet></router-outlet>

      <footer class="bg-dark">
        <small class="d-block py-5 text-center text-muted" [innerHTML]="footer"> </small>
      </footer>
    </web-layout>
  `,
})
export class AppComponent {
  title: 'site';
  logo: '/assets/icono2.png';
  links: UiLink[] = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Courses', path: '/courses' },
    { label: 'Contact', path: '/contact' },
    { label: 'Login', path: '/login' },
    { label: 'Logout', path: '/logout' },
  ];
  footer = 'Copyright &copy; 2020';
}
