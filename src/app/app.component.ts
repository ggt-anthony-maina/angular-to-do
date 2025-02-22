import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterOutlet , RouterLink, RouterLinkActive, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ CommonModule ,RouterOutlet,RouterLink, RouterLinkActive,HomeComponent, RouterModule],
  template:  `
  <main>
    <a [routerLink]="['/']">
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
      </header>
    </a>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-app';
}
