import React from 'react';
import styled from 'styled-components';
import CriarVideoForm from '../../componentes/CriarVideoForm';
import { device } from '../../utils/DeviceSizes';

const CriarVideoContainer = styled.div`
  width:1360px;
  height:1192px;
  margin: 0 auto;

  @media ${device.tabletL}{
    width:1024px;
    height:1192px;
  }

  @media ${device.mobileL}{
    width:430px;
    height:1510px;
    margin:0;
  }
`
const TitleContainer = styled.div`
  width:782px;
  height:136px;
  margin: 71px auto 47px;

  @media ${device.tabletL}{
    margin:82.5px auto 47px;
  }

  @media ${device.mobileL}{
    width:430px;
    height:181px;
    margin:50px auto;
  }
`

const Title = styled.h1`
  font-family:'RobotoBlack';
  font-size:60px;
  color: var(--cor-de-texto);
  text-align: center;

  @media ${device.tabletL}{
    font-size:40px;
  }

  @media ${device.mobileL}{
    font-size:40px;
  }
`

const Subtitle = styled.p`
  font-family:'RobotoRegular';
  font-size:20px;
  color: #ffffff;
  text-align: center;

  @media ${device.tabletL}{
    font-size:15px;
  }

  @media ${device.mobileL}{
    font-size:15px;
  }
`
const FormContainer = styled.div`
  width:1172px;
  height:867px;
  margin: 0 94px 71px 94px;

  @media ${device.tabletL}{
    width:974px;
    margin:0 50px 71.5px 50px;
  }

  @media ${device.mobileL}{
    width:330px;
    height:108px;
    margin:auto 50px;
  }
`

const CriarVideo = ({categorias}) => {
  return (
    <CriarVideoContainer>
      <TitleContainer>
        <Title>NOVO VÍDEO</Title>
        <Subtitle>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO</Subtitle>
      </TitleContainer>
      <FormContainer>
          <CriarVideoForm categorias={categorias}/>
      </FormContainer>
    </CriarVideoContainer>
  )
};

export default CriarVideo;