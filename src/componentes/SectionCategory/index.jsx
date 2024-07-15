import styled from "styled-components"
import VideoCard from '../VideoCard'
import TitleCategory from '../TitleCategory'
import { device } from '../../utils/DeviceSizes'



const SectionContainer = styled.div`
    width:1356.34px;
    margin: 0 41.66px 93px 42px;

    @media ${device.tabletL}{
        width:894.24px;
        margin:0 52.88px 93px 76.86px;
    }

    @media ${device.mobileL}{
        width:430px;
        margin:0;
        margin-left:2px;
    }
`

const VideoCardContainer = styled.div`
    display: flex;
    gap:30px;
    flex-wrap:wrap;
    overflow-x:none;

    /* Customização do scrollbar para navegadores WebKit */
    &::-webkit-scrollbar {
        width: 3px;  /* Largura do scrollbar vertical */
        height: 8px;  /* Altura do scrollbar horizontal */
    }

    &::-webkit-scrollbar-track {
        background: rgba(34,113,219,0.17);  /* Cor do fundo do track */
        border-radius: 15px;  /* Bordas arredondadas */
    }

    &::-webkit-scrollbar-thumb {
        background: #2271d1;  /* Cor do thumb */
        border-radius: 15px;  /* Bordas arredondadas */
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #2271d1;  /* Cor do thumb ao passar o mouse */
    }

    /* Remover as setas de scroll (arrows) */
    &::-webkit-scrollbar-button {
        display: none;  /* Remove as setas */
    }

    @media ${device.tabletL}{
        overflow-x:scroll;
        flex-wrap:nowrap;
        scrollbar-arrow-color: transparent;

    }

    @media ${device.mobileL}{
        overflow-x:scroll;
        flex-wrap:nowrap;
        scrollbar-arrow-color: transparent;
        width:373.64px;
        height:319.92px;
    }
`

const SectionCategory = ({categorias, videos})=>{
    
    const getVideosByCategory = (categoria) => {
        return videos.filter((video) => video.categoria === categoria.categoria);
    };
    
    return(
        <SectionContainer>
            {categorias.map((categoria) => (
                <div key={categoria.id}>
                    <TitleCategory key={categoria.id} color={categoria.color}>
                        {categoria.categoria}
                    </TitleCategory>
                    <VideoCardContainer >
                        {getVideosByCategory(categoria).map((video) => (
                        <VideoCard
                            key={video.id}
                            imagem={video.imagem}
                            color={categoria.color}
                            video={video}
                            categorias={categorias}
                        />
                        ))}
                    </VideoCardContainer>
                </div>
            ))}
    </SectionContainer>
    )
}

export default SectionCategory