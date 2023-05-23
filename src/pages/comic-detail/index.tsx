import { useRouter } from "next/router";
import api from "../services/api";
import { useCallback, useEffect, useState } from "react";
import { CharacterProps, CreatorType } from "@/hooks/useCharacters";
import { Header } from "@/components/Header";
import { Container, Div, DivImage } from "./styles";
import { MONTHS } from "@/components/constants/months";
import { Loading } from "@/components/Loading";
import { BsFillReplyFill } from "react-icons/bs";

export default function ComicDetail() {
  const router = useRouter();
  const { id } = router.query
  const [comicDetail, setComicDetail] = useState<CharacterProps>()
  
  const getComicDetail = useCallback ( async() => {
    try {
      const result = await api.get(`comics/${id}`)
      setComicDetail(result.data.data.results[0]);
      
    } catch (error) {
      console.log('error', error);
      
    }
    setIsLoading(false)
    
  },[])


  useEffect(() => {
    getComicDetail()
    setIsLoading(true)
  }, [id])

 
  const dateConverter = (timestamp: any) => {
    const date = new Date(timestamp);
    const month = MONTHS[date.getMonth() - 1];
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month?.name} ${day}, ${year}`;
  };

  const [isLoading, setIsLoading] = useState(false)

  const handleGoBack = () => {
    router.back()
  }

  return (
    <Container>
      <Header/>
      
   
        
      {isLoading ? (
        <Loading/>
      ):
      <>

      <DivImage>

        <img src={`${comicDetail?.thumbnail?.path}.${comicDetail?.thumbnail?.extension}`} alt="comic image"/>
      </DivImage>
      <Div>
      <button onClick={handleGoBack} style={{ color: "red",display: "flex", gap:"10px", cursor: "pointer", background: "transparent", border: "none", marginBottom: "10px"}}>
      <BsFillReplyFill size={20}/>
      <h2>Back  </h2>
      </button>   
        <h1>{comicDetail?.title}</h1>
        <h2>Published:</h2>
        <p>{dateConverter(comicDetail?.dates[0].date)}</p>
          {comicDetail?.creators.items.map((creator: CreatorType) => (
        <div key={creator.resourceURI}>
        <h2>{creator.role}:</h2>
        <p>{creator.name}</p>
        </div>
        ))}
      </Div>
      </>}
    </Container>
  )
}


