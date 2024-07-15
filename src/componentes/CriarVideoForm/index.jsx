import styled from "styled-components"
import InputText from '../InputText'
import ToggleInput from "../ToggleInput"
import TextAreaInput from "../TextAreaInput"
import { useState } from "react"
import Button from "../Button"
import Label from "../Label"
import { device } from "../../utils/DeviceSizes"

const TitleContainer = styled.div`
    width:100%;
    height:91px;
    margin-bottom:60px;

    h2{
        font-family:'SourceSansSemiBold';
        font-size:36px;
        color:#ffffff;
    }
    
    hr{
        color:lightgrey;
        border-radius:4px;
    }
`

const FormContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
`

const ButtonContainer = styled.div`
    display:flex;
    gap:30px;

    @media ${device.tabletL}{
        width:924px;
        height:138px;
    }

    @media ${device.mobileL}{
        width:330px;
        height:138px;
        flex-direction:column;
        padding: 60px 10px;
        align-items:center; 
    }
`

const Container = styled.div`
    width:100%;
    margin-bottom:60px;
    display:flex;
    gap:20px;

    @media ${device.mobileL}{
        flex-direction:column;
        gap:60px;
    }
`
const InputContainer = styled.div`
    display:flex;
    flex-direction:column;

    @media ${device.tabletL}{
        width:470px;
    }
`

const CriarVideoForm = ({categorias})=>{

    const [titulo, setTitulo] = useState('')
    const [categoria, setCategoria] = useState('')
    const [imagem, setImagem] = useState('')
    const [url, setUrl] = useState('')
    const [descricao, setDescricao] = useState('')

    const [errors, setErrors] = useState({
        titulo: '',
        categoria: '',
        imagem: '',
        url: '',
        descricao: '',
    });

    const handleSubmit = async(event) =>{
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

        const newVideo ={
            titulo,
            categoria,
            imagem,
            url,
            descricao
        }

        try{
            const response = await fetch('http://localhost:3000/videos',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify(newVideo),
            })

            if(!response.ok){
                console.log('Não foi possível criar vídeo')
            }

            
            setTitulo('')
            setCategoria('')
            setImagem('')
            setUrl('')
            setDescricao('')
            alert('Vídeo criado com sucesso!')
        }catch(error){
            console.log(error)
        }

    }

    return(
        <>
            <TitleContainer>
                <hr></hr>
                <h2>Criar Card</h2>
                <hr></hr>   
            </TitleContainer>
            <FormContainer>
                <form onSubmit={handleSubmit}>
                    <Container>
                        <InputContainer>
                            <Label hFor="Titulo" error={errors.titulo}>Título</Label> 
                            <InputText 
                            id="Titulo" 
                            name="Titulo" 
                            placeholder= {errors.titulo || "digite o título" }
                            value={titulo} 
                            onChange={value =>setTitulo(value.target.value)}
                            error={errors.titulo}
                            bordercolor='lightgrey'
                            />
                        </InputContainer>
                        <InputContainer>
                            <Label hFor="Categoria" error={errors.categoria}>Categoria</Label>
                            <ToggleInput 
                            id="Categoria" 
                            value={categoria} 
                            categorias={categorias} 
                            placeholder="selecione uma categoria" 
                            onChange={value =>setCategoria(value.target.value)}
                            error={errors.categoria}
                            bordercolor='lightgrey'
                            />
                        </InputContainer> 
                    </Container>
                    <Container>
                        <InputContainer>
                            <Label hFor="Imagem" error={errors.imagem}>Imagem</Label> 
                            <InputText 
                            id="Imagem" 
                            name="Imagem" 
                            placeholder= {errors.imagem || "digite o link da imagem" }
                            value={imagem} 
                            onChange={value =>setImagem(value.target.value)}
                            error={errors.imagem}
                            bordercolor='lightgrey'
                            />
                        </InputContainer>
                        <InputContainer>
                            <Label hFor="Video" error={errors.url}>Video</Label> 
                            <InputText 
                            id="Video" 
                            name="Video" 
                            placeholder= {errors.url || "digite o link do video"} 
                            value={url} 
                            onChange={value =>setUrl(value.target.value)}
                            error={errors.url}
                            bordercolor='lightgrey'
                            />
                        </InputContainer>
                    </Container>
                    <Container>
                        <InputContainer>
                            <Label hFor="Descricao" error={errors.descricao}>Descrição</Label> 
                            <TextAreaInput 
                            id="Descricao" 
                            name="Descricao" 
                            placeholder={errors.descricao || "sobre o que é esse vídeo?" }
                            value={descricao} 
                            onChange={value =>setDescricao(value.target.value)}
                            error={errors.descricao}
                            bordercolor='lightgrey'
                            height="220px"
                            tabletheight="220px"
                            mobileheight="201px"
                            />
                        </InputContainer>  
                    </Container>
                    <ButtonContainer>
                        <Button type="submit" color="#2271d1">Guardar</Button>
                        <Button type="reset" color="var(--cor-de-texto)">Limpar</Button>
                    </ButtonContainer>
                </form>
            </FormContainer>
            
        </>
    )
}

export default CriarVideoForm