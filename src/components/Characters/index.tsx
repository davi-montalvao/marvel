import { useCallback, useEffect, useState } from "react";
import { ButtonMore, Card, CardList, Container } from "./styles";

import { Loading } from "../../components/Loading";

import { useRouter } from "next/router";

import { CharacterProps } from "../../types/character";
import api from "../../services/api";

export const Characters = () => {
  const router = useRouter();
  const [characters, setCharacters] = useState<CharacterProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = useCallback(async () => {
    try {
      const offset = characters.length;
      const response = await api.get("comics", {
        params: {
          offset,
        },
      });
      setCharacters([...characters, ...response.data.data.results]);
    } catch (error) {
      console.log('error', error);
    }
  }, [characters]);

  async function fetchCharacters() {
    const result = await api.get('comics');
    setCharacters(result.data.data.results);
    setIsLoading(false);
  }

  useEffect(() => {
    setIsLoading(true);
    fetchCharacters();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <CardList>
            {characters.map((character) => (
              <Card
                onClick={() => router.push(`/ComicDetails?id=${character.id}`)}
                key={character.id}
                thumbnail={character.thumbnail}
              >
                <div id="img" />
                <h2>{character.title}</h2>
              </Card>
            ))}
          </CardList>
          <ButtonMore onClick={handleLoadMore}>
            More
          </ButtonMore>
        </>
      )}
    </Container>
  );
};
