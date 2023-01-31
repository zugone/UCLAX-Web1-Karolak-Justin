import { useState } from 'react';
import styled from 'styled-components';

import sunSRC from './images/sun.png';
import moonSRC from './images/moon.png';

const SunAndMoon = () => {
    // JS Functions

    const [imgSRC, imgSRCUpdate] = useState(sunSRC);

    const changetoMoon = () => {
        //console.log('MOON');
        imgSRCUpdate(moonSRC);
    }
    const changetoSun = () => {
        //console.log('SUN');
        imgSRCUpdate(sunSRC);
    }


    // Html
    return (
        <SunAndMoonStyled>
            <h2>Sun and Moon</h2>
            <div className="SunMoonimage">
                <img
                    src={imgSRC}
                    onMouseEnter={changetoMoon}
                    onMouseLeave={changetoSun}
                />
            </div>
        </SunAndMoonStyled>
    );
};

export default SunAndMoon;

//styles
const SunAndMoonStyled = styled.div`
.SunMoonimage {
    text-align: center;


    img {
        border: solid 20px teal;
        margin: 30px;
        padding: 20px;
        background-color: #789c9c;
    }
}

`;