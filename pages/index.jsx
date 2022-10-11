import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { useState } from 'react'

function usePushableState(array) {
  let [state, setState] = useState(array);

  let pushState = item => {
    let n = [...state]
    n.push(item)
    setState(n)
  }

  return [state, pushState]
}


export default function Home() {
  let [rulesets, pushRuleset] = usePushableState([{ name: 'new ruleset' }])
  let [collections, pushCollection] = usePushableState([])
  let ruleset_list = []

  ruleset_list = rulesets.map(ruleset => {
    return <ListItem key={ruleset.name}>{ruleset.name}</ListItem>
  })

  return (
    <Global>
      <Card>
        <Title>
          <p>RULESETS</p>
          <ActionArea>
            <Action onClick={_ => { pushRuleset({ name: 'ruleset ' + rulesets.length }) }} i>
              <img src='/asterisk.svg' />
              NEW
            </Action>
            <Action>LOAD</Action>
          </ActionArea>
        </Title>
        <List items={ruleset_list} />
      </Card>
    </Global>
  )
}

export function List(props) {
  return (
    <ListWrapper>{props.items}</ListWrapper>
  )
}

const Global = styled.div`
   
`;

const Card = styled.div`
  background-color: #FFFFFF;
  color: black;
  display: flex;
  flex-direction: column;
  width: 30rem;
  padding-top: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  badding-bottom: 1rem;
  border: solid 2px #3D00B8;

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: auto;
`

const Action = styled.button`
  background: none;
  border: none;
  padding-top: 9px;
  padding-bottom: 9px;
  padding-left: 12px;
  padding-right: 12px;
  display: flex;
  align-items: center;
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


`

const ActionArea = styled.div`
 
 display: flex;
`

const Title = styled.div`
  border-bottom: solid 2px #3D00B8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`

const ListWrapper = styled.div`
  background-color: #E0E0E0; 
  padding: 0.5rem;
  padding-top: 0.5rem;
`

const ListItem = styled.div`
  padding: 0.25rem;
  &:hover {
    background-color: #3D00B8;
    color: white;
  }
`;
