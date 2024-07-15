import styled from "styled-components";
import React, { useState } from "react";
import { TbTrashX } from "react-icons/tb";
import { BiEditAlt } from "react-icons/bi";
import Modal from "../Modal";
import { device } from "../../utils/DeviceSizes";


const VideoContainer = styled.div`
    width:432.1px;
    height:325.5px;
    margin-bottom:30px;

    @media ${device.tabletL}{
        width:432px;
        height:319.92px;    
    }

    @media ${device.mobileL}{
        width:373.64px;
        height:319.92px;
    }
`

const VideoImagem = styled.div`
    width: 432px;
    height: 260.85px;
    border-radius: 2px;
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: inset 0 0 20px 10px ${(props) => props.color};
        z-index: 1;
    }

    img {
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 2px;
        position: relative;
        z-index: 0;
    }

    @media ${device.tabletL}{
       width:432px;
       height:260.85px; 
    }

    @media ${device.mobileL}{
        width:373.64px;
        height:260.85px;
    }
`;

const OptionsContainer = styled.div`
    width:426px;
    height:59px;
    border-top:0;
    border-left:4px;
    border-right:4px;
    border-bottom: 4px;
    border-style: solid;
    border-color: ${(props) => props.color};
    border-radius:0 0 25px 25px;
    background-color:#000000;
    display:flex;
    justify-content:space-around;
    align-items:center;

    @media ${device.tabletL}{
       width:426px;
       height:39px; 
    }

    @media ${device.mobileL}{
        width:370px;
        height:59px;
    }
`

const Option = styled.div`
    display:flex;
    align-items:center;
    cursor:pointer;

    @media ${device.tabletL}{
       width:113.43px;
       height:28px; 
    }

    @media ${device.mobileL}{
        width:113.43px;
        height:28px;
    }
`
const Icone = styled.div`
    width:25.43px;
    height:28px;

    @media ${device.mobileL}{
        height:19px;
    }
`

const IconeTexto = styled.p`
    font-family:'RobotoBlack';
    font-size:16px;
    color:#FFFFFF;
`

const VideoCard = ({imagem,color,video, categorias})=>{

    const [isModalVisible, setModalVisible] = useState(false);
    const [videoId, setVideoId] = useState(video.id)

    const handleEditClick = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    const handleDeleteClick  = async (event) =>{
        event.preventDefault()

        try {
            const response = await fetch(`http://localhost:3000/videos/${videoId}`, {
                method:'DELETE',
            })
            
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <>
            <VideoContainer>
                <VideoImagem color={color}>
                    <img src={imagem} alt="Video" />
                </VideoImagem>
                <OptionsContainer color={color}>
                    <Option onClick={handleDeleteClick}>
                        <Icone>
                            <TbTrashX size={25} style={{color: "#ffffff",}} />
                        </Icone>
                        <IconeTexto>DELETAR</IconeTexto>
                    </Option>
                    <Option onClick={handleEditClick}>
                        <Icone>
                            <BiEditAlt size={25} style={{color: "#ffffff",}} />
                        </Icone>
                        <IconeTexto>EDITAR</IconeTexto>
                    </Option>
                </OptionsContainer>
            </VideoContainer>
            {isModalVisible && <Modal onClose={handleCloseModal} video={video} categorias={categorias}/>}
        </>
        
    )
}

export default VideoCard