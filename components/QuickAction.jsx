import styled, {css} from 'styled-components'

export default function QuickAction(props) {
    return (
        <Action onClick={props.click} short={props.short}>
            <img src={'/' + props.icon} />
            <Copy>{props.copy}</Copy>
        </Action>
    )
}

const Action = styled.button`
    background: none;
    border: none;
    padding-top: 9px;
    padding-bottom: 9px;
    padding-left: 12px;
    padding-right: 12px;
    display: flex;
    align-items: center;
    font-family: 'Prompt';
    font-size: 1rem;

    &:hover {
      background-color: #3D00B8;
      color: white;
      cursor: pointer;

      img {
        filter: invert(100%);
      }
    }

    img {
      margin-right: 0.5rem;
    }

    ${props => props.short && css`
        max-height: 1.5rem;
    `}
`

const Copy = styled.p`
  font-weight: 700;
`