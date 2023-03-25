import React from 'react';
import styled from 'styled-components';

/* Images ---------------------------*/
import logoUrl from './is-logo.png';

const SiteLogo = () => {
    return (
        <SiteLogoStyled className='SiteLogo'>
            <img src={ logoUrl } alt='is. Logo' />
        </SiteLogoStyled>
    );
}

export default SiteLogo;

const SiteLogoStyled = styled.div`
    color: #121212;
    width: 100%;
    height: 100%;

    img {
        width: 50%;
        height: auto;
    }

`;