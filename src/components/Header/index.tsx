import MarvelLogo from "../../assets/images/marvel_logo.svg"
import Image from 'next/image'
import { Container } from "./styles";

export const Header = () => {


  return (
    <Container>
    <Image
      src={MarvelLogo}
      alt="Marvel"
    />
    </Container>

  );
};
