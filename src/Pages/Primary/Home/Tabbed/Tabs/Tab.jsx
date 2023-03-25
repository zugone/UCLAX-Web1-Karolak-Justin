import styled from 'styled-components';
import { breakpoints } from '@/Common/useMediaQuery';

const Tab = ({tab, curTab, curTabUpdate}) => {

    const onClick = () => {
        curTabUpdate(tab);
    }

    const theClassName = (curTab.id === tab.id) ? 'Tab selected' : 'Tab'

    return (
        <TabStyled className= {theClassName} onClick={ onClick }>
                {tab.title}
        </TabStyled>
    );
}

export default Tab;

const TabStyled = styled.div`
    background-color: #ffffff;
    color: #000000;
    text-align: center;
    cursor: pointer;
    margin-right: 0px;
    display: inline-block;
    padding-right: 40px;
    font-size: 2.4em;
    padding-bottom: 2%;

    &.hover {
        opacity: .6;
    }

    &.selected {
        border-bottom-color:solid 3px #FF7373;
        color: #FF7373;
    }

    @media ${ breakpoints.isMediumAndUp}{
        display: flex;
    }
`;