import styled from "styled-components";

/* Components ---------------------------*/
import Inset from "@/Common/PagesLayout/Inset";
import Slideshow from "./Slideshow/Slideshow";
import Tabbed from "./Tabbed/Tabbed";
//import YouTube from "./YouTube";

const Home = () => {
  return (
    <HomeStyled className='Home'>
      <h1>Home</h1>
      <Slideshow />
      <Inset>
        <Tabbed />
      </Inset>
    </HomeStyled>
  );
};

export default Home;

const HomeStyled = styled.main`
    h1 {
        display: none;
    }
`;
