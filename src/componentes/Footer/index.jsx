import styled from "styled-components"
import logo from '../../assets/logo.svg'
import homeButtonMobile from '../../assets/home_button_mobile.png'
import homeIconMobile from '../../assets/home_icone.png'
import criarVideoButtonMobile from '../../assets/criarvideo_button_mobile.png'
import criarVideoIconMobile from '../../assets/criarvideo_icone.png'
import { device } from "../../utils/DeviceSizes"
import { useLocation, Link  } from "react-router-dom"

const FooterContainer = styled.div`
    width:100%;
    height:125px;
    background-color: var(--cor-de-fundo);
    position:relative;
    bottom:0;
    margin:0;
    box-shadow:-5px 0 8px 4px var(--cor-da-shadow);

    @media ${device.mobileL}{
        height:100px;
    }
`

const StyledFooter = styled.div`
    width: 168.45px;
    height:40px;
    position:relative;
    left:637.27px;
    top:42.5px;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: cover;

    @media ${device.tabletL}{
        left:427.77px;
    }

    @media ${device.mobileL}{
        display:none;
    }
`

const MobileButtonsContainer = styled.div`
    position:relative;
    top:23px;
    justify-content:space-around;
    align-items:center;
    margin:23px auto;
    box-sizing:border-box;
    display:none;

    @media ${device.tabletL}{
        display:none;
    }

    @media ${device.mobileL}{
        display:block;
    }
`

const Buttom = styled.div`
    width:167px;
    height:54px;
    box-sizing:border-box;
    cursor:pointer;

    @media ${device.tabletL}{
        display:none;
    }
`
const Icon = styled.div`
    height:54px;
    box-sizing:border-box;
    cursor:pointer;

    @media ${device.tabletL}{
        display:none;
    }
`


const Footer =()=>{

    const location = useLocation();

    return(
        <FooterContainer>
            <StyledFooter/>
            <MobileButtonsContainer style={{display:location.pathname === "/"? 'flex':'none'}}>
                <Link to="/" >
                    <Buttom >
                        <img src={homeButtonMobile} alt="Home button" />
                    </Buttom>
                </Link>
                <Link to="/criar-video">
                    <Icon>
                        <img src={criarVideoIconMobile} alt="Criar Video Icon" />
                    </Icon>
                </Link>
            </MobileButtonsContainer>
            <MobileButtonsContainer style={{display:location.pathname === "/criar-video"? 'flex':'none'}}>
                <Link to="/" >
                    <Icon>
                        <img src={homeIconMobile} alt="Home Icon" />
                    </Icon>
                </Link>
                <Link to="/criar-video" >
                    <Buttom >
                        <img src={criarVideoButtonMobile} alt="Criar Video button" />
                    </Buttom>
                </Link>
            </MobileButtonsContainer>
        </FooterContainer>
    )
}

export default Footer