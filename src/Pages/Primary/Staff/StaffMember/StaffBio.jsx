import styled from 'styled-components';

/* Components ---------------------------*/
import AccoladeList from './Accolades/AccoladeList';

const StaffBio = ({member}) => {
    return (
        <StaffBioStyled className='StaffBio'>
            <div className="year"><b>Year Completed: </b>{ member.yearStarted }</div>
            <br></br>
            <AccoladeList member= {member}/>
        </StaffBioStyled>
    );
}

export default StaffBio;

const StaffBioStyled = styled.div`
    padding: 0px 10px;
    font-size: 20px;
`;