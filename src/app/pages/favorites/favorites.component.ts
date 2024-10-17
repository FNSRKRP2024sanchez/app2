import { AnimecardComponent } from '../../components/animecard/animecard.component';
import { FavoritesService } from './../../services/favorites.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [AnimecardComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css'
})
export class FavoritesComponent {
  favoritos:any [] = [];
  private  _favoritesService  = inject(FavoritesService);

  constructor(){
    this.getFavorites;

    // this.favoritos = this._favoritesService.getlLocalFavorites();

  }

  get getFavorites(){
    return this._favoritesService.getlLocalFavorites;
  }

}
