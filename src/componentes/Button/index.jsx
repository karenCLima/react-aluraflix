import styled from "styled-components"


const StyledButton = styled.button`
    width:180.13px;
    height:54px;
    border-radius:10px;
    box-sizing:border-box;
    font-family:'SourceSansBlack';
    font-size:20px;
    text-align:center;
    text-transform:uppercase;
    color:#FFFFFF;
    background-color:var(--cor-de-fundo);
    border: 3px solid ${(props)=>props.color};
    cursor:pointer;
`

const Button =({children, type, color})=>{
    return(
        <StyledButton type={type} color={color}>
            {children}
        </StyledButton>
    )
}

export default Button