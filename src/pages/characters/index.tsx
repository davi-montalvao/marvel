import { useCallback, useEffect, useState } from "react";
import { ButtonMore, Card, CardList, Container } from './styles'
import { Header } from "@/components/Header";
import { CharacterProps  } from "@/hooks/useCharacters";
import router from "next/router";
import api from "../services/api";
import { Loading } from "@/components/Loading";


export default function Characters() {
  const [characters, setcharacters] = useState<CharacterProps[]>([])
  const [isLoading, setIsLoading] = useState(false)



  const handleMore = useCallback(async()=> {
    
    try {
      const offset = characters.length
      const response = await api.get("comics", {
        params: {
          offset,
        }
      })
      setcharacters([...characters, ...response.data.data.results])
    } catch (error) {
      console.log('error', error);
    }
},[characters])

 
  async function fetchCharacters() {
    const result = await api.get('comics')
    console.log('result', result);
    setcharacters(result.data.data.results)
    setIsLoading(false)
  }
  
  useEffect(() => {
    setIsLoading(true)

    fetchCharacters()
  }, [])


  return (
    <Container>
      <Header />
      { isLoading ? (
        <Loading/>  
      ):
        <>
      <CardList>
        {characters?.map(character => {
          return (
            <Card 
            onClick={()=> router.push(`/comic-detail?id=${character.id}`)}
            key={character.id} 
            thumbnail={character.thumbnail}>
            <div id="img"/>
            <h2>{character.title}</h2>
           </Card>
          )
        })}
      </CardList>
      <ButtonMore onClick={handleMore}>
        More
      </ButtonMore>
        </>
}
    </Container>
  )
}