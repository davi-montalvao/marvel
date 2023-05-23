
export type CharacterProps = {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  }
  dates: DateType[];
  creators: {
    items: CreatorType[]
  } 
}


export type DateType = {
  date: string;
};

export type CreatorType = {
  role: string;
  name: string;
  resourceURI: string;
};

