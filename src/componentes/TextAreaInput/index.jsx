import styled from "styled-components"
import { device } from "../../utils/DeviceSizes"


const TextAreaContainer = styled.div`
    width:573px;
    height:${props=>props.height};

    @media ${device.tabletL}{
        width:470px;
        height: ${props=>props.tabletheight}

    }

    @media ${device.mobileL}{
        width:330px;
        height:${props=>props.mobileheight};
    }
`

const StyledTextArea = styled.textarea`
    width:100%;
    height:${props=>props.height};
    background-color:var(--cor-de-fundo);
    border-radius:15px;
    border:2px solid ${props => props.error ? 'red' : props.$bordercolor};
    color:${props => props.error ? 'red' : '#A5A5A5'};
    font-family:'SourceSansSemiBold';
    font-size:20px;
    padding:10px;

    &::placeholder{
        font-size:20px;
        color: ${props => props.error ? 'red' : '#A5A5A5'};
    }

    /* Customização do scrollbar para navegadores WebKit */
    &::-webkit-scrollbar {
        width: 8px;  /* Largura do scrollbar vertical */
        height: 3px;  /* Altura do scrollbar horizontal */
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
`

const TextAreaInput = ({id, name, placeholder,value, onChange, error, bordercolor, height,mobileheight, tabletheight})=>{
    return(
        <TextAreaContainer>
            <StyledTextArea id={id} name={name} placeholder={placeholder} value={value} maxLength={500} onChange={onChange} error={error} $bordercolor={bordercolor} height={height} mobileheight={mobileheight} tabletheight={tabletheight}></StyledTextArea>
        </TextAreaContainer>
    )
}

export default TextAreaInput