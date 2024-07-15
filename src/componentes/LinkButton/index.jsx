import styled from "styled-components";



const StyledButton = styled.button`
    width:180.13px;
    height:54px;
    border-radius:10px;
    box-sizing:border-box;
    background-color:${props=> props.$active ? '#000000':'var(--cor-de-fundo)'};
    font-family:'SourceSansBlack';
    font-size:20px;
    text-align:center;
    text-transform:uppercase;
    color:${props => props.$active ? 'var(--cor-da-shadow)': 'var(--cor-de-texto)'};
    box-shadow: ${props=> props.$active ? 'inset 2px 0 8px 5px var(--cor-da-shadow),inset -2px 0 8px 5px var(--cor-da-shadow)':'none'};
    border:${props=>props.$active ? '0':'2px solid var(--cor-de-texto)'};
    cursor:pointer;
`

const LinkButton = ({children, active= false})=>{
    return(
        <StyledButton $active={active}>
            {children}
        </StyledButton>
    )
}

export default LinkButton