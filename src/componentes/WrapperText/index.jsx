import styled from "styled-components"
import { device } from "../../utils/DeviceSizes"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content:flex-start;
    box-sizing:border-box;
`
const TitleCategory = styled.h1`
    font-family: 'RobotoRegular';
    font-weight: bold;
    font-size:48px;
    color:#f5f5f5;
    background-color:#6BD1FF;
    width:296.82px;
    border-radius:15px;
    text-align: center;
    padding: 14px 5px;
    margin:0 0 72px 0;

    @media ${device.tabletL}{
        margin-bottom:20px;
    }
`

const Title = styled.h2`
    font-family: 'Roboto';
    font-size:46px;
    width:332.92px;
    color: #f5f5f5;
    margin:0 0 9px 0;

`
const Paragraph = styled.p`
    width: 662.84px;
    height:110px;
    font-family:'Roboto';
    font-size:18px;
    font-weight:light;
    color:#f5f5f5;
    margin:0;

    @media ${device.tabletL}{
        width:464.32px;
    }
`

const WrapperText = ()=>{
    return(
        <Container>
            <TitleCategory>FRONT END</TitleCategory>
            <Title>SEO com React</Title>
            <Paragraph>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"! </Paragraph>
        </Container>
    )
}

export default WrapperText