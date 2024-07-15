import styled from "styled-components"

const StyledLabel = styled.label`
    font-family:'SourceSansSemiBold';
    color:${props => props.error ? 'red' : '#ffffff'};
    font-size:20px;
    width:164px;
    height:31px;
`

const Label =({children, hFor, error})=>{
    return(
        <StyledLabel htmlFor={hFor} error={error}>
            {children}
        </StyledLabel>
    )
}

export default Label