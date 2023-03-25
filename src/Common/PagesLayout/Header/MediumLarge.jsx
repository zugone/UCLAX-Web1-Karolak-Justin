import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

/* Components ---------------------------*/
import Inset from '../Inset.jsx';
import SiteLogo from '../SiteLogo/SiteLogo.jsx';

const MediumLarge = () => {
    return (
        <MediumLargeStyled className='MediumLarge'>
            <Inset>
                <div className="row">
                    <div className="logo">
                        <SiteLogo />
                    </div>
                    <div className="menus">
                        <nav className="mainMenu">
                            <NavLink to={'/'} end>
                                Home
                            </NavLink>
                            <NavLink to={'/staff'}>Projects</NavLink>
                            <NavLink to={'/contact'}>Contact</NavLink>
                            <NavLink to={'/course-work'}>Course</NavLink>
                        </nav>
                    </div>
                </div>
            </Inset>
        </MediumLargeStyled>
    );
}

export default MediumLarge;

const MediumLargeStyled = styled.div`
color: #888888;

.row {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .menus {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }
}

.logo {
    .SiteLogo {
        width: 80%;
        margin: auto;
        padding: 20px 0px;
    }
}

nav.mainMenu {
    text-align: center;
    padding: 40px;
    a {
        width: 80px;
        display: inline-block;
        line-height: 30px;
        margin: 0px 0px 0px 0px;
        border-bottom: solid 3px white;

        text-align: center;
        font-size: 12px;
        color: #000000;
        font-weight: bold;
        text-decoration: none;
        text-transform: uppercase;

        &:hover {
            opacity: .6;
        }

        &.active {
            color: #000000;
            border-bottom-color: #FF7373;
        }
    }
}

`;