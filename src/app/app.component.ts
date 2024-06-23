import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: '', url: '/equipe/' },
    { title: 'Equipes', url: '/equipe/' },
    { title: 'Pilotos', url: '/pilotos/' },
    { title: 'Carros', url: '/carros/' },
    { title: 'Outbox', url: '/folder/outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/favorites', icon: 'heart' }
  ];
  public labels = ['Labels'];
  constructor() {}
}
