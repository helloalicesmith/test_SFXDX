import { AxiosResponse } from 'axios'

import axios from '../utils/axios'
import { CharactersType, CharacterDetailsType } from '../types'

export interface RepositoryType {
  fetch(): Promise<Array<CharactersType>>
  fetchCharacter(id: string): Promise<CharacterDetailsType>
}

const Repository: RepositoryType = class {
  public static fetch = async (): Promise<Array<CharactersType>> => {
    const {
      data: { characters },
    }: AxiosResponse = await axios.get<Array<CharactersType>>('/anime/34134/characters_staff')

    return characters
  }

  public static fetchCharacter = async (id: string): Promise<CharacterDetailsType> => {
    const { data }: AxiosResponse = await axios.get<CharacterDetailsType>(`/character/${id}`)

    return data
  }
}

export default Repository
