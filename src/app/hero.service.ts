import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './models/hero';
import { HEROES } from './models/mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  public getHeroes() : Observable<Hero[]>
  {
    this.messageService.add('HeroService: fetched heroes.');
    return of(HEROES);
  }
}
