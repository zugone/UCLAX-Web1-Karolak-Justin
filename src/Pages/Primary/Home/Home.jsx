import styled from "styled-components";

/* Components ---------------------------*/
import Inset from "@/Common/PagesLayout/Inset";
import Slideshow from "./Slideshow/Slideshow";
import Tabbed from "./Tabbed/Tabbed";
import Youtube from "./YouTubeVideo";
//<YouTubeVideo videoId='oVnAaqkNSik'/>
import ReactPlayer from 'react-player/youtube'


const Home = () => {
  return (
    <HomeStyled className='Home'>
      <h1>Home</h1>
      <Slideshow />
      <Inset>
        <Tabbed />
      </Inset>
      <Youtube/>
    </HomeStyled>
  );
};

export default Home;

const HomeStyled = styled.main`
    h1 {
        display: none;
    }


`;
