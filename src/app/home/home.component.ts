import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FontAwesomeModule,
    RouterOutlet,
    RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  
  mostrarMenu: boolean = false;

  faSearch = faSearch;
  faBars = faBars;
  faClose = faClose;

  arrayOpciones: any[] = [
    { nombre: 'Home', ruta: 'home' },
    { nombre: 'About', ruta: 'about' },
    { nombre: 'Services', ruta: 'services' },
    // { nombre: 'Experience', ruta: 'experience' },
    // { nombre: 'Portfolio', ruta: '' },
  ]

  mostarMenu(){
    this.mostrarMenu = !this.mostrarMenu;
  }

}
