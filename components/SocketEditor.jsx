import { usePushableState } from '../pages'
import styled from 'styled-components'
import Button from './Button'
import QuickAction from './QuickAction'

export default function SocketEditor(props) {
    const [sockets, pushSocket] = usePushableState(props.trait.sockets)

    return (
        <>
            <Wrapper>
                <img src={'/humanoid_alt.jpg'}/>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`