import { AxiosResponse } from "axios";

import axios from "../utils/axios";
import { CharactersType } from "../types";

export interface RepositoryType {
  fetch(): Promise<Array<CharactersType>>;
}

const Repository: RepositoryType = class {
  public static fetch = async (): Promise<Array<CharactersType>> => {
    const {
      data: { characters }
    }: AxiosResponse = await axios.get("/anime/1/characters_staff");

    return characters;
  };
};

export default Repository;
