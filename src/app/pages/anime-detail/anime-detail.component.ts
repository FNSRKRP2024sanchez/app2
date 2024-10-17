import { AnimeService } from './../../services/anime.service';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FavoritesService } from '../../services/favorites.service';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-anime-detail',
  standalone: true,
  imports: [],
  templateUrl: './anime-detail.component.html',
  styleUrl: './anime-detail.component.css'
})
export class AnimeDetailComponent {
anime: any = {};
  private _activeRoute = inject(ActivatedRoute);
  private _animeS = inject(AnimeService);


  constructor(){
    this._activeRoute.params.subscribe((params: any)=> {
      console.log(params.id);
      this.getAnime(params.id);
    })
  }

  getAnime(id: string){
    this._animeS.getAnimeByid(id).subscribe((anime: any)=>{
      console.log(anime);
      this.anime = anime.data
    });

  }
}

