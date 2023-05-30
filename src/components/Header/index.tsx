import MarvelLogo from "../../assets/images/marvel_logo.svg";
import Image from 'next/image';
import { useRouter } from "next/router";
import { BsFillReplyFill } from "react-icons/bs";
import { Container } from "./styles";

export const Header = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  }

  const isHome = router.pathname === "/";

  return (
    <Container>
      {!isHome && (
        <div>
          <button onClick={handleGoBack}>
            <BsFillReplyFill size={32} />
            <p>Back</p>
          </button>
        </div>
      )}
      <Image src={MarvelLogo} alt="Marvel" />
    </Container>
  );
};
