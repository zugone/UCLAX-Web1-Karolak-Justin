import { useState } from 'react';
import styled from 'styled-components';
import { breakpoints } from '@/Common/useMediaQuery';
/* Data ---------------------------*/
import { tabbedData } from './tabbedData';

/* Components ---------------------------*/
import TabContent from './TabContent';
import TabList from './Tabs/TabList';

const Tabbed = () => {

    const [curTab, curTabUpdate] = useState(tabbedData[0]);

    return (
        <TabbedStyled className='Tabbed'>
            <TabList curTab={ curTab } curTabUpdate={ curTabUpdate} tabs={tabbedData}/>
            <TabContent curTab={ curTab }/>
        </TabbedStyled>
    );
}

export default Tabbed;

const TabbedStyled = styled.div`
    @media ${ breakpoints.isMediumAndUp}{
        display: flex;
    }

    padding: 20px;

    .tabbedData .img {
        height: 100px;
    }
`;