import styled from "styled-components"
import Label from "../Label"
import InputText from "../InputText"
import TextAreaInput from "../TextAreaInput"
import ToggleInput from "../ToggleInput"
import LinkButton from '../LinkButton'
import { useState } from "react"
import { RiCloseCircleLine } from "react-icons/ri";
import { device } from "../../utils/DeviceSizes"

const borderColorForm = '#2271d1'

const Overlay =styled.div`
    background-color: rgba(3, 18, 47, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index:100;
`

const ModalContainer = styled.dialog`
    position: float;
    top: 714.5px;
    left: 100px;
    width: 974px;
    height: 940px;
    background-color: #03122f;
    border-radius:15px;
    border: 3px solid #6bd1ff;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index:102;

    @media ${device.tabletL}{
        width:865px;
        height:1074px;
        top:732.5px;
        left:79px;
    }

    @media ${device.mobileL}{
        width:374px;
        height:1169px;
        top:356px;
        left:29px;
    }
`

const CloseButton = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    cursor: pointer;
    color: white;

    @media ${device.tabletL}{
        top:34.5px;
        right:38px;
    }

    @media ${device.mobileL}{
        top:16px;
        right:9px;
    }
`

const Title = styled.h1`
    font-family:'RobotoBlack';
    font-size:60px;
    color:${borderColorForm};
    text-transform:uppercase;
    margin-bottom:43px;

    @media ${device.tabletL}{
        margin-top:60px;
        margin-bottom:40px;
    }

    @media ${device.mobileL}{
        font-size:32px;
    }
`

const FormModalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const InputContainer = styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom:43px;

    @media ${device.tabletL}{
        margin-bottom:40px;
    }
`
const ButtonContainner = styled.div`
    display:flex;
    justify-content: space-around;

    @media ${device.mobileL}{
        flex-direction:column;
        align-items:center;
        gap:20px;
        margin-bottom:60px;
    }
`

const Modal = ({ onClose, video, categorias}) => {

    const [videoId, setVideoId] = useState(video.id)
    const [titulo, setTitulo] = useState(video.titulo)
    const [categoria, setCategoria] = useState(video.categoria)
    const [imagem, setImagem] = useState(video.imagem)
    const [url, setUrl] = useState(video.url)
    const [descricao, setDescricao] = useState(video.descricao)

    const [errors, setErrors] = useState({
        titulo: '',
        categoria: '',
        imagem: '',
        url: '',
        descricao: '',
    });

    const handleEditSubmit = async(event) =>{
        event.preventDefault()

        let newErrors = {};

        if (!titulo) newErrors.titulo = 'Esse campo precisa estar preenchido';
        if (!categoria) newErrors.categoria = 'Esse campo precisa estar preenchido';
        if (!imagem) newErrors.imagem = 'o link é obrigatório';
        if (!url) newErrors.url = 'o link é obrigatório';
        if (!descricao) newErrors.descricao = 'Esse campo precisa estar preenchido';

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        const editedVideo ={
            videoId,
            titulo,
            categoria,
            imagem,
            url,
            descricao
        }

        try{
            const response = await fetch(`http://localhost:3000/videos/${videoId}`, {
                method:'PUT',
                body:JSON.stringify(editedVideo),
                headers:{
                    "Content-Type": "application/json; charset=UTF-8",
                },
            })

            alert('Vídeo atualizado com sucesso!')

        }catch(error){
            console.log(error)
        }
    }

    return (
        <>
            <Overlay/>
            <ModalContainer>
            <CloseButton onClick={onClose}>
                <RiCloseCircleLine size={25} />
            </CloseButton>
            <FormModalContainer video={video}>
                <Title>Editar Card:</Title>
                <form onSubmit={handleEditSubmit}>
                    <InputContainer>
                        <Label hFor="Titulo" error={errors.titulo}>Título</Label>
                        <InputText
                        id="Titulo" 
                        name="Titulo" 
                        placeholder= {errors.titulo || titulo }
                        value={titulo} 
                        onChange={value =>setTitulo(value.target.value)}
                        error={errors.titulo}
                        bordercolor={borderColorForm}
                        />
                    </InputContainer>
                    <InputContainer>
                        <Label hFor="Categoria" error={errors.categoria}>Categoria</Label>
                        <ToggleInput 
                            id="Categoria" 
                            value={categoria} 
                            categorias={categorias} 
                            placeholder={categoria} 
                            onChange={value =>setCategoria(value.target.value)}
                            error={errors.categoria}
                            bordercolor={borderColorForm}
                        />
                    </InputContainer>
                    <InputContainer>
                        <Label hFor="Imagem" error={errors.imagem}>Imagem</Label> 
                        <InputText 
                            id="Imagem" 
                            name="Imagem" 
                            placeholder= {errors.imagem || imagem }
                            value={imagem} 
                            onChange={value =>setImagem(value.target.value)}
                            error={errors.imagem}
                            bordercolor={borderColorForm}
                        />
                    </InputContainer>
                    <InputContainer>
                        <Label hFor="Video" error={errors.url}>Video</Label> 
                        <InputText 
                            id="Video" 
                            name="Video" 
                            placeholder= {errors.url || video} 
                            value={url} 
                            onChange={value =>setUrl(value.target.value)}
                            error={errors.url}
                            bordercolor={borderColorForm}
                        />
                    </InputContainer>
                    <InputContainer>
                        <Label hFor="Descricao" error={errors.descricao}>Descrição</Label> 
                        <TextAreaInput 
                            id="Descricao" 
                            name="Descricao" 
                            placeholder={errors.descricao || descricao }
                            value={descricao} 
                            onChange={value =>setDescricao(value.target.value)}
                            error={errors.descricao}
                            bordercolor={borderColorForm}
                            height="75px"
                            mobileheight="155px"
                            tabletheight="112px"
                        />
                    </InputContainer> 
                    <ButtonContainner>
                        <LinkButton active={true} type="submit">Guardar</LinkButton>
                        <LinkButton active={false} type="reset">Limpar</LinkButton>
                    </ButtonContainner>
                </form>
            </FormModalContainer>
        </ModalContainer>
        </>
        
    );
};

export default Modal;