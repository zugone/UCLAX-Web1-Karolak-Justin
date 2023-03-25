import styled from 'styled-components';

/* Media Query ---------------------------*/
import { breakpoints } from '@/Common/useMediaQuery';

const TabContent = ({curTab}) => {
    return (
        <TabContentStyled className='TabContent'>
            <div className='column1'>
                <img src={ curTab.image } alt={curTab.title } />
            </div>
            <div className='column2'>
                <h3>{curTab.title }</h3>
                <div dangerouslySetInnerHTML={ {__html: curTab.text}}></div>
            </div>

        </TabContentStyled>
    );
}

export default TabContent;

const TabContentStyled = styled.div`
    background-color: #ffffff;

    @media ${ breakpoints.isMediumAndUp} {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 1rem;
    }


    .column1 {
        img {
            display: block;
            max-width: 100%;
            margin: 0px auto 15px;
            @media ${ breakpoints.isMediumAndUp} {
                margin: 0px;
                z-index: 1;
            }
        }
    }

    .column2 {
        z-index: 2;
        h3 {
            font-size: 30px;
            color: #000000;
            display: none;
        }

        p {
            font-size: 24px;
            color: #000000;
            margin-bottom: 20px;
            line-height: 120%;
        }
    }
`;