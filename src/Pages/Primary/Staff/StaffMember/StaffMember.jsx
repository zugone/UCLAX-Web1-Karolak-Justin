import styled from 'styled-components';

/* Components ---------------------------*/
import StaffBio from './StaffBio';

const StaffMember = ({member}) => {
    return (
        <StaffMemberStyled className='StaffMember'>
            <img src={member.image} alt= {member.name}/>
            <h3>{member.name}</h3>
            <StaffBio member={member}/>
        </StaffMemberStyled>
    );
}

export default StaffMember;

const StaffMemberStyled = styled.div`

    background-color: #ffffff;
    //border: solid 1px wheat;

    img {
        width: 100%;
        display: block;
        z-index: 1;
    }

    h3 {
        font-size: 20px;
        color: white;
        background-color: #00000062;
        margin: 0px;
        padding: 5px 10px;
        z-index: 2;
        position: relative;
        top: -32px;
    }
`;