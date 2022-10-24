import {useState,useRef} from 'react'
import { usePushableState } from '../pages'
import styled, {css} from 'styled-components'
import Button from './Button'
import QuickAction from './QuickAction'

export default function SocketEditor(props) {
    const [selected, setSelected] = useState(null)
    let socketRefs = []

    console.log(props.sockets)

    return (
        <Wrapper>
            <img src={'/humanoid_alt.jpg'} />
            { props.sockets.map(socket => {
                return <Socket 
                    transform={'translate(-2rem, -2rem)'} 
                    src="/record2-fill.svg"
                    selected={selected === socket}
                    onClick={_ => setSelected(socket)}
                    ref={element => socketRefs.push(element)}/>
            })}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2.5;
`

const Socket = styled.img`
    position: absolute;
    width: 1.5rem;
    z-index: 3;

    transform: ${props => props.transform};

    ${props => props.selected && css`
        border: solid 2px #3D00B8;
    `}

    &:hover {
        border: solid 2px #3D00B8;
    }
`