import styled from "styled-components"
import { device } from "../../utils/DeviceSizes"

const InputTextContainer = styled.div`
    width:573px;
    height:62px;

    @media ${device.tabletL}{
        width:470px;
        height:62px
    }

    @media ${device.mobileL}{
        width:330px;
        height:62px;
    }
`

const Input = styled.input`
    width:100%;
    height:100%;
    border-radius:10px;
    background-color: var(--cor-de-fundo);
    color:${props => props.error ? 'red' : '#A5A5A5'};
    font-family:'SourceSansSemiBold';
    font-size: 20px;
    border:2px solid ${props => props.error ? 'red' : props.$bordercolor};

    &::placeholder {
        font-size: 20px;
        color: ${props => props.error ? 'red' : '#A5A5A5'};
    }
`


const InputText = ({id,name, placeholder, value,onChange, error, bordercolor})=>{
    return (
        <InputTextContainer>
            <Input type="text" id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} error={error} $bordercolor={bordercolor}/>
        </InputTextContainer>
    )
}

export default InputText