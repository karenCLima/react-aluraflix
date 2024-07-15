import { styled } from "styled-components"
import BannerCard from "../BannerCard"
import { device } from "../../utils/DeviceSizes"


const StyledBanner = styled.figure`
    position: relative;
    height: 52rem;
    width: 100%;
    padding: 0 0 0 0 ;
    

    &::before {
        content: '';
        background-image: ${props => `url(${props.$bannerImage})`};
        background-repeat: no-repeat;
        background-size: cover;
        opacity: 0.3;
        position: absolute;
        top: -53px;
        right: 0;
        bottom: 0;
        left: 0;
        width:100%;
        height:100%;
        box-sizing:border-box;
        z-index:1;
    }

    @media ${device.tabletL}{
        height:590.41px;
        margin-bottom:113.59px;
    }

    @media ${device.mobileL}{
        display:none;
    }
`
    



const Banner = ({bannerImage}) =>{
    return(
        <StyledBanner $bannerImage={bannerImage}>
            <BannerCard/>
        </StyledBanner>
    )

}

export default Banner