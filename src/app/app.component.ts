  import { FooterComponent } from './footer/footer.component';
  import { Component } from '@angular/core';
  import { RouterOutlet } from '@angular/router';
  import { HomeComponent } from './home/home.component';
  import { NavbarComponent } from './navbar/navbar.component';
  import { HeroComponent } from './hero/hero.component';

  @Component({
    selector: 'app-root',
    standalone: true,
    imports: [HeroComponent, NavbarComponent, FooterComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    title = 'home';
  }
