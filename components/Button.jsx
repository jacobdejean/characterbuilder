import styled from 'styled-components'

export default function Button(props) {
    return (
        <Wrapper>{props.text}</Wrapper>
    )
}

const Wrapper = styled.button`
  font-family: 'Prompt';
  height: 2.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0;
  font-size: 1rem;
  flex: none;
  letter-spacing: 1px;

  background: rgb(61,0,184);
  background: linear-gradient(90deg, rgba(61,0,184,1) 0%, rgba(107,37,249,1) 100%);
  color: white;
  border-radius: 5px;
  outline: none;
  border: none;
`