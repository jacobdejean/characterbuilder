import styled from "styled-components"

import Field from './Field'
import QuickAction from "./QuickAction";
import Button from './Button'
import SocketEditor from "./SocketEditor";
import { usePushableState } from "../pages";

export default function TraitEditor(props) {
    const [sockets, pushSocket] = usePushableState(props.trait.sockets)

    function newSocket() {
        pushSocket({
            name: 'new socket',
            transform: ''
        })
    }

    return (
        <Wrapper>
            <Settings>
                <SectionTitle>General</SectionTitle>
                <Field name={'NAME'} initial={props.trait.name}
                    onChange={ value => { props.trait.name = value; props.onNameChange(value)}} />
                <Field name={'TAGS'} initial={props.trait.tags} 
                    onChange={ value => { props.trait.tags = value; props.onTagChange(value)}}
                    />
                <SectionTitle>Probability</SectionTitle>
                <Field name={'COUNT'}/>
            </Settings>
            <Sockets>
                <TitleArea>
                    <SectionTitle>Sockets</SectionTitle>
                    <Actions>
                        <QuickAction 
                            copy={'ADD'} 
                            icon={'record2-fill.svg'} 
                            click={_ => { newSocket() }} 
                            short={true}/>
                    </Actions>
                </TitleArea>
                <SocketEditor sockets={sockets}/>
            </Sockets>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    font-weight: 500;
    display: flex;
    column-gap: 1rem;
    padding-bottom: 1rem;
`

const Settings = styled.div`
    width: 50%;
`

const Sockets = styled.div`
    width: 100%;
`

const TitleArea = styled.div`
    display: flex;
    align-items: center;
`

const SectionTitle = styled.h2`
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    flex: 1 1 auto;
`;

const Actions = styled.div`
    display: flex;
    column-gap: 1rem;
`