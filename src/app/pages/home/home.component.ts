import { Component, inject } from '@angular/core';
import { AnimecardComponent } from '../../components/animecard/animecard.component';
import { AnimeService } from '../../services/anime.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AnimecardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  topAnimes: any[] = [];
  private _animeService = inject(AnimeService)
  constructor (){
    this._animeService.getTopAnimes().subscribe((respuesta: any) => {
      console.log(respuesta.data)
      this.topAnimes = respuesta.data;
    } )
  }

}




