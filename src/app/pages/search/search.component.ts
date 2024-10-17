import { Component, inject } from '@angular/core';
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';
import { FormsModule } from '@angular/forms';
import { AnimeService } from '../../services/anime.service';
import { AnimecardComponent } from '../../components/animecard/animecard.component';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,AnimecardComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  AnimeSearchs: any [] = [];
  busqueda: string = 'One Pice';
  sinDatos = true;
  private _animeS = inject(AnimeService);


  constructor(){
    this.buscarAnime();
  }


  buscarAnime(){
    console.log('Buscando...', this.busqueda)
    
    this._animeS.searchAnime(this.busqueda).subscribe((result:any)=> {
        console.log(result); 
      this.AnimeSearchs = result.data;
      if (this.AnimeSearchs.length < 1){
        this.sinDatos = false;
      }
      })
      this.busqueda = '';
    }

}
