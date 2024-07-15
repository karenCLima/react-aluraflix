import styled from 'styled-components';
import { device } from '../../utils/DeviceSizes';


const ToggleContainer = styled.div`
    width:573px;
    height:66px;

    @media ${device.tabletL}{
        width:470px;
        height:62px;
    }

    @media ${device.mobileL}{
        width:330px;
        height:62px;
    }
`

const Select = styled.select`
    width:100%;
    height:100%;
    border-radius:10px;
    background-color: var(--cor-de-fundo);
    color:${props => props.error ? 'red' : '#A5A5A5'};
    font-family:'SourceSansSemiBold';
    font-size: 20px;
    border:2px solid ${props => props.error ? 'red' : props.$bordercolor};
    cursor:pointer;

    option[disabled] {
        color: ${props => props.error ? 'red' : '#A5A5A5'};
    }
`



const ToggleInput = ({id, value, categorias=[], placeholder, onChange, error, bordercolor})=>{
    return(
        <ToggleContainer>
            <Select id={id} value={value} onChange={onChange} error={error} $bordercolor={bordercolor}>
                <option value="" disabled hidden>{error || placeholder}</option>
                {categorias.map((categoria, indice)=>(
                    <option key={indice} value={categoria.categoria}>{categoria.categoria}</option>
                    ))}  
            </Select>
        </ToggleContainer>
    )
}

export default ToggleInput