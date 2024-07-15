import styled from "styled-components"
import  logo from '../../assets/logo.svg'
import LinkButton from "../LinkButton"
import { useLocation, Link  } from "react-router-dom"
import { device } from "../../utils/DeviceSizes"


const NavContainer = styled.nav`
    width:100%;
    height:125px;
    background-color: var(--cor-de-fundo);
    position:relative;
    top:0;
    right:0;
    left:0;
    margin:0;
    box-shadow:5px 0 8px 4px var(--cor-da-shadow);
    display:flex;
    gap:900px;
    z-index:2;

    @media ${device.tabletL}{
        width:1024px;
        gap:390.3px;
    }

    @media ${device.mobileL}{
        display:none;    
    }
`

const LogoContainer = styled.div`
    width: 168.45px;
    height:40px;
    position:relative;
    left:51.15px;
    top:42.5px;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: cover;

    @media ${device.tabletL}{
        left:20px;
    }
`

const ButtonContainer = styled.div`
    width:385.25px;
    height:54px;
    position:relative;
    top:35.5px;
    right:51.15px;
    display:flex;
    gap:25px;
    margin:0;
    box-sizing:border-box;

    @media ${device.tabletL}{
        right:20px;
    }
`



const NavBar = ()=>{

    const location = useLocation();

    return(
        <NavContainer>
            <LogoContainer/>
            <ButtonContainer>
                <Link to="/">
                    <LinkButton active={location.pathname === "/"}>HOME</LinkButton>
                </Link>
                <Link to="/criar-video">
                    <LinkButton  active={location.pathname === "/criar-video"}>NOVO VIDEO</LinkButton>
                </Link>
                
            </ButtonContainer>
        </NavContainer>
    )
}

export default NavBar