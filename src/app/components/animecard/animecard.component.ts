import { Component, inject, Input } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animecard',
  standalone: true,
  imports: [],
  templateUrl: './animecard.component.html',
  styleUrls: ['./animecard.component.css']
})
export class AnimecardComponent {
  private _favoritesService = inject(FavoritesService);

  private _router = inject(Router);


  @Input() animeInfo: any = {};


  addToFavorite(anime: any) {
    const EsNoFavorites = this._favoritesService.inFavorites(anime);
    if (EsNoFavorites) {
      this._favoritesService.addToFavorite(anime);
      Swal.fire({
        title: anime.title + ' Eliminado de favoritos',
        icon: 'error',
        timer: 2000,
        toast: true,
        showConfirmButton: false,
        position: 'top-end'
      });
    } else {
      this._favoritesService.addToFavorite(anime);
      Swal.fire({
        title: anime.title + ' Agregado a favoritos',
        icon: 'success',
        timer: 2000,
        toast: true,
        showConfirmButton: false,
        position: 'top-end'
      });
    }
  }


  goToDetail(id:number){
    this._router.navigateByUrl('/anime/'+id);
  }

  inFavorites(anime:any){
    const resp = this._favoritesService.inFavorites(anime)
    if (resp === true){
      return 'fa-solid fa-heart'
    }else{
      return 'fa-regular fa-heart'
    }
  }



}
