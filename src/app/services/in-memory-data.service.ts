import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Hero } from '../hero'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService{

  createDb() {
    const heroes = [
      {id:11, name: 'Dr Magma'},
      {id:12, name: 'Andrew shultz'},
      {id:13, name: 'Asshole army'},
      {id:14, name: 'Battalion master'},
      {id:15, name: 'Dr Actually'},
      {id:16, name: 'Peepu'},
      {id:17, name: 'Dada'},
      {id:18, name: 'Mr fuckboy'},
      {id:19, name: 'Tistrian'},
      {id:20, name: 'Dynasty'},
      
    ]
    return {heroes}
  }

  genId(heroes: Hero[]) : number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11
  }
}
