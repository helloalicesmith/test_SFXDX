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
