import styled from "styled-components"
import { device } from "../../utils/DeviceSizes"


const StyledTitle = styled.div`
    width:432px;
    height:70px;
    border-radius:15px;
    color:var(--cor-de-texto);
    background-color: ${(props) => props.color};
    font-family:'RobotoBlack';
    font-size:32px;
    text-align:center;
    box-sizing:border-box;
    padding:18px 0;
    margin-bottom:40px;
    text-transform:uppercase;

    @media ${device.tabletL}{
        margin:44px auto;
    }

    @media ${device.mobileL}{
        width:286px;
        height:70px;
        font-size:24px;
        margin-top:40px;
    }
`

const TitleCategory = ({children, color})=>{
    return(
        <StyledTitle color={color}>
            {children}
        </StyledTitle>
    )
}

export default TitleCategory