import styled from 'styled-components';

import Essay from './Essay.jsx';

const Essays = () => {
    return (
        <EssaysStyled className='Essays'>
            <h1>Essays</h1>
            <Essay question='Q1: Explain the difference between HTML, CSS and JavaScript.'>
                1. This is my answer
            </Essay>
            <Essay question='Q1: What is the difference between Git and GitHub?'>
                2. This is my answer
            </Essay>
            <Essay question='Q1: What is the difference between JQuery and React?'>
                3. This is my answer
            </Essay>
        </EssaysStyled>
    );
}

export default Essays;

const EssaysStyled = styled.main`

`;