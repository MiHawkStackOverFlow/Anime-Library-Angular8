import { Action } from 'redux';
import { Anime } from '../interfaces/anime';
import { LIKE_ANIME, DISLIKE_ANIME, DISLIKE_ALL_ANIME } from './actions';

export interface AnimeAppState {
    animes: Array<Anime>;
    lastUpdate: Date;
}

export const INITIAL_STATE: AnimeAppState = {
    animes: [],
    lastUpdate: new Date()
}

export function rootReducer(state: AnimeAppState, action: Action): AnimeAppState {
    switch(action.type) {
        case LIKE_ANIME:
          return Object.assign({}, state, {
            animes: state.animes.concat(Object.assign({})),
            lastUpdate: new Date()
          }); 
    }
    return state;
} 