import styled, {css} from 'styled-components'

export default function Field(props) {
    return (
        <Wrapper>
            <Label htmlFor={props.name}>{props.name}</Label>        
            <Input name={props.name} defaultValue={props.initial} onChange={evt => props.onChange(evt.target.value)}/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    border-bottom: solid 1px lightgray;
    padding: 0.5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    margin-left: -0.5rem;
    display: flex;
`

const Label = styled.label`
    margin-right: 2rem; 
    width: 5rem;
`

const Input = styled.input`
    border: none;
    flex-grow: 1;
    outline: none;
    caret-color: black;
    font-size: 1rem;
    font-family: 'Prompt';
    font-weight: 500;
;    
`