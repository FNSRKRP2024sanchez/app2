import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
const URLAPI = 'https://api.jikan.moe/v4/';


@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private _http = inject (HttpClient)
  constructor() { 


    
  }

getTopAnimes(){
  return this._http.get(URLAPI + 'top/anime');
}
getAnimeByid(id: string){
  return this._http.get(URLAPI+'anime/'+id);
}
searchAnime(termino:string){
  return this._http.get(URLAPI+'anime?q='+termino)
}
}




