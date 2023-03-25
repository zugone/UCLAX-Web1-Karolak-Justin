import React from 'react';
import YouTube from 'react-youtube';

import styled from 'styled-components';

//oVnAaqkNSik
const Youtube = () => {
    return (
        <YoutubeStyled className='Youtube'>
            Youtube
        </YoutubeStyled>
    );
}

export default Youtube;

const YoutubeStyled = styled.div`

`;
class Example extends React.Component {
    render() {
      const opts = {
        height: '500',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

      return <YouTube videoId="oVnAaqkNSik" opts={opts} onReady={this._onReady} />;
    }

    _onReady(event) {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }
  }