import styled from "styled-components"
import WrapperText from "../WrapperText"
import player from './player.svg'
import { device } from "../../utils/DeviceSizes"



const CardContainer = styled.div`
    width: 95%;
    height: 333.58px;
    position: relative;
    top: 343px;
    left: 40.11px;
    right:41px;
    z-index:2;

    @media ${device.tabletL}{
        top:128px;
        width:954px;
    }
`
const Card = styled.div`
    display:flex;
    gap: 50.04px;
    flex-grow:1;

    @media ${device.tabletL}{
        gap:35.06px;
    }
`

const WrapperTextContainer = styled.div`
    width: 665.84px;
    height: 305px;
    margin-top:23px;
    border-radius: 15px;

    @media ${device.tabletL}{
        width:466.42px;
    }
`

const PlayerContainer = styled.div`
    width:646px;
    height: 333.58px;

    @media ${device.tabletL}{

        img{
            width:452.52px;
            height: 333.58px;
        }
        
    }
`

const BannerCard = ()=>{
    return (
        <CardContainer>
            <Card>
                <WrapperTextContainer>
                    <WrapperText/>
                </WrapperTextContainer>
                <PlayerContainer>
                    <img src={player} alt="Imagen de um player de vídeo" />
                </PlayerContainer>
            </Card>
        </CardContainer>
    )
}

export default BannerCard