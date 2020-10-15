export interface CharacterDetailsType extends CharactersType {
  about: string;
  animeography: Array<Omit<CharactersType, 'voice_actors'>>;
  mangaography: Array<Omit<CharactersType, 'voice_actors'>>;
  member_favorites: number;
  name_kanji: null | string;
  nicknames: Array<string>;
  request_cache_expiry: number;
  request_cached: boolean;
  request_hash: string
}

export interface CharactersType {
  image_url: string;
  mal_id: number;
  name: string;
  role: string;
  url: string;
  voice_actors: Array<VoiceActorsType>;
}

export interface VoiceActorsType {
  image_url: string;
  language: string;
  mal_id: number;
  name: string;
  url: string;
}
