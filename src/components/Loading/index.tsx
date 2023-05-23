import LoadingLogo from "../../assets/images/loading.svg"
import Image from 'next/image'
import { Container } from "./styles";


export const Loading = () => {


  return (
    <Container>
    <Image
      src={LoadingLogo}
      alt="Marvel"
    />
    </Container>

  );
};
