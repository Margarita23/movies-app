import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Settings } from '../../../settings';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  apikey: string = '';
  
  constructor(private http : HttpClient) {
    this.apikey = Settings.getApiKey();
  }

  getMovies() {
    return this.http.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${ this.apikey }&language=en-US&page=1`);
  }
}
