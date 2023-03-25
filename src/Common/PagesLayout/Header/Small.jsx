import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import SiteLogo from '../SiteLogo/SiteLogo.jsx';
import Hamburger from './Hamburger.jsx';

const Small = () => {
    const [isMenuShowing, isMenuShowingUpdate] = useState(false);


    const toggleMenu = () => {
        isMenuShowingUpdate(!isMenuShowing);
    }

    const hideMenu = () => {
        isMenuShowingUpdate(false);
    }

    useEffect(() => {
        if (isMenuShowing){
            //add class modal open
            document.body.classList.add('modal-open');
        } else {
            //remove class modal open
            document.body.classList.remove('modal-open');
        }

        return () => {
            document.body.classList.remove('modal-open');
        }
    },[isMenuShowing]);
    return (
        <SmallStyled className='Small'>
            <SiteLogo />

            <Hamburger toggleMenu= {toggleMenu}/>

            { isMenuShowing && <nav className="mainMenu">
                <NavLink onClick={ hideMenu} to={'/'} end>
                    Home
                </NavLink>
                <NavLink onClick={ hideMenu} to={'/staff'}>Staff</NavLink>
                <NavLink onClick={ hideMenu} to={'/contact'}>Contact</NavLink>
                <NavLink onClick={ hideMenu} to={'/course-work'}>Course</NavLink>
            </nav>}
        </SmallStyled>
    );
}

export default Small;

const SmallStyled = styled.div`
    color: white;

    display: flex;
    justify-content: center;

    .SiteLogo {
        height: 300px;
        padding: 0px;
        max-width: 300px;
        position: relative;
        left: -120px;
    }

    .mainMenu {
        position: fixed;

        left: 0px;
        right: 0px;
        bottom: 0px;
        top: 150px;
        z-index: 2;

        background-color: #ffffff;
        a {
            display: block;

            padding: 10px;
            border-bottom: 1px solid #999999;

            color: #000000;
            text-decoration: none;

            &:hover,
            &:active,
            &:focus {
                background-color: #fafafa;
            }
        }
    }

`;