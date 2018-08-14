import { Action } from 'redux';
import { Anime } from '../anime';
import { LIKE_ANIME, DISLIKE_ANIME, DISLIKE_ALL_ANIME } from './actions';

export interface AnimeAppState {
    animes: Array<Anime>;
    lastUpdate: Date;
}

export const INITIAL_STATE: AnimeAppState = {
    animes: [],
    lastUpdate: null
}

export function rootReducer(state: AnimeAppState, action: Action): AnimeAppState {
    switch(action.type) {   }
    return state;
} 