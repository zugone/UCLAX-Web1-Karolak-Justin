import ReactPlayer from 'react-player/youtube'

import styled from 'styled-components';

const Youtube = () => {
    return (
        <YoutubeStyled className='Youtube'>
            <ReactPlayer url='https://youtu.be/oVnAaqkNSik' />
        </YoutubeStyled>
    );
}

export default Youtube;

const YoutubeStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;


`;


