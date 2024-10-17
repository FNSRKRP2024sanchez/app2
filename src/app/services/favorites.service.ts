import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  misFavoritos: any[] = [];


  constructor() {
    this.getlLocalFavorites;
  }


  get getlLocalFavorites(){
    return this.misFavoritos = JSON.parse( localStorage.getItem
      ('favoritos')||'[]')
  }

  inFavorites(anime: any){
    return !!this.misFavoritos.find( a => a.mal_id === anime.mal_id);
  }

  addToFavorite(anime: any){
    const  found = this.misFavoritos.find( a => a.mal_id ===anime.mal_id);
      if (found){
      console.log('ya esta en favoritos');
      this.misFavoritos= this.misFavoritos.filter( a => a.mal_id !==
        found.mal_id);
        localStorage.setItem('favoritos',JSON.stringify
          (this.misFavoritos)); 
      return;
      }else{
      this.misFavoritos.push(anime);
    localStorage.setItem('favoritos',JSON.stringify
      (this.misFavoritos)); 
    }
  }

  removeFromFavorite(anime: any) {
    const index = this.misFavoritos.findIndex(fav => fav.id === anime.id);
    if (index !== -1) {
      this.misFavoritos.splice(index, 1);
    }
  }




} 
