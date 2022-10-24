import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'
import { useState, useRef, useEffect } from 'react'

import QuickAction from '../components/QuickAction'
import Preview from '../components/Preview'
import List from '../components/List'

export function usePushableState(array) {
  let [state, setState] = useState(array);

  let pushState = item => {
    let n = [...state]
    n.push(item)
    setState(n)
  }

  return [state, pushState]
}

let initialPopulated = false;

export default function Home() {
  let [traits, pushTrait] = usePushableState([])

  function blankTrait() {
    pushTrait({ 
      name: 'TRAIT ' + traits.length,
      tags: 'blank'
    }) 
  }

  // load with sample data
  useEffect(() => {
    if(initialPopulated)
      return;

    const initial = [
      { name: 'Juliet S', tags: 'character', sockets: [] },
      { name: 'Banana', tags: 'prop', sockets: [] },
      { name: 'Hat', tags: 'prop', sockets: [] },
      { name: 'Pink Lighting', tags: 'effect', sockets: [] },
      { name: 'Dark Lighting', tags: 'effect', sockets: [] },
      { name: 'Bedroom', tags: 'scene', sockets: [] },
      { name: 'Computers', tags: 'scene', sockets: [] }
    ]

    for(let trait of initial) {
      traits.push(trait);
    }

    initialPopulated = true;

    pushTrait({name: 'root', tags: 'root', sockets: []})
  }, [])

  return (
    <Global>
      <Card>
        <Title>
          <Header>TRAITS</Header>
          <ActionArea>
            <QuickAction copy={'NEW'} icon={'asterisk.svg'} click={_ => { blankTrait() }} />
            <QuickAction copy={'LOAD'} icon={'folder-fill.svg'} click={_ => {  }} />
          </ActionArea>
        </Title>
        <Scroller>
          <List items={traits} />
        </Scroller>
        <Generate>Generate</Generate>
      </Card>
      <Viewport>
        <Preview/>
      </Viewport>
    </Global>
  )
}

const Global = styled.div``

const Card = styled.div`
  background-color: #FFFFFF;
  color: black;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 40rem;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  border: solid 2px #3D00B8;

  position: absolute;
  top: 2rem;
  left: 2rem;
  bottom: 2rem;
  right: auto;
  z-index: 2;
`

const Scroller = styled.div`
  overflow: scroll;
  flex: 1 1 auto;
`

const Viewport = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`

const ActionArea = styled.div`
  display: flex;
`

const Header = styled.h1`
  margin-bottom: 0.5rem;
  margin-top: 0rem;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0rem;
`

const Generate = styled.button`
  width: 100%;
  font-family: 'Prompt';
  font-size: 1.5rem;
  flex: none;
  letter-spacing: 1px;

  background: rgb(61,0,184);
background: linear-gradient(90deg, rgba(61,0,184,1) 0%, rgba(107,37,249,1) 100%);
  color: white;
  border-radius: 5px;
  outline: none;
  border: none;
`