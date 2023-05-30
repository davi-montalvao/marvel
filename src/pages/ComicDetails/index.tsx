import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import api from "../../services/api";

import { Loading } from "../../components/Loading";
import Image from 'next/image';


import { MONTHS } from "../../utils/months";
import { CharacterProps, CreatorType } from "../../types/character";
import { ComicDetailsContainer, ImageWrapper, MainContainer } from "../../styles/styles.ComicDetails";

const ComicDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [comicDetail, setComicDetail] = useState<CharacterProps>();
  const [isLoading, setIsLoading] = useState(false);

  const fetchComicDetail = useCallback(async () => {
    try {
      const result = await api.get(`comics/${id}`);
      setComicDetail(result.data.data.results[0]);
    } catch (error) {
      console.log('error', error);
    }
    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    setIsLoading(true);
    fetchComicDetail();
  }, [fetchComicDetail]);

  const convertTimestampToDate = (timestamp: any) => {
    const date = new Date(timestamp);
    const month = MONTHS[date.getMonth() - 1];
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month?.name} ${day}, ${year}`;
  };

  return (
    <MainContainer>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ImageWrapper>
            {comicDetail?.thumbnail && (
              <Image
                width={350}
                height={500}
                src={`${comicDetail?.thumbnail?.path}.${comicDetail?.thumbnail?.extension}`}
                alt="comic image"
              />
            )}
          </ImageWrapper>
          <ComicDetailsContainer>
            <h1>{comicDetail?.title}</h1>
            <h2>Published:</h2>
            <p>{convertTimestampToDate(comicDetail?.dates[0].date)}</p>
            <div>
              {comicDetail?.creators.items.map((creator: CreatorType, index: number) => (
                <div key={index}>
                  <h2>{creator.role}:</h2>
                  <p>{creator.name}</p>
                </div>
              ))}
            </div>
          </ComicDetailsContainer>
        </>
      )}
    </MainContainer>
  );
};

export default ComicDetails;
