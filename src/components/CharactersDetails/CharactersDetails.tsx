import React from "react";
import LazyLoad from "react-lazyload";

import { CharactersType } from "../../types";

export type CharactersDetailsProps = {
  character: CharactersType;
};

const CharactersDetails: React.FC<CharactersDetailsProps> = ({
  character
}): React.ReactElement => {
  return (
    <div>
      <h1>{character.name}</h1>
      <LazyLoad>
        <img src={character.image_url} />
      </LazyLoad>
    </div>
  );
};

export default CharactersDetails;
