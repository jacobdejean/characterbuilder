import React, { useEffect, useState } from 'react'
import { usePushableState } from '../pages/index'
import styled, { css } from 'styled-components'
import Field from './Field'
import TraitEditor from './TraitEditor'

export default function ListItem(props) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState(props.trait.name)
  const [tags, setTags] = useState(props.trait.tags)

  return (
    <Wrapper isopen={open} onClick={_ => setOpen(!open)}>
      <Display>
        <Name isopen={open}>{name}</Name>
        <Tags>
          {tags.split(',').map(tag => <Tag>{tag}</Tag>)}
        </Tags>
      </Display>
      <Content onClick={evt => evt.stopPropagation()}>
         <TraitEditor trait={props.trait} onNameChange={setName} onTagChange={setTags}/>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 2.5rem;
  cursor: pointer;
  overflow: hidden;

  transition: height 1s ease;
  
  &:hover {
    color: #3D00B8;
  }

  ${props => props.isopen && css`
    height: auto;
    border-bottom: solid 2px #3D00B8;
    color: #3D00B8;
    margin-bottom: 1rem;
  `}
`

const Display = styled.div`
  display: flex;
`

const Name = styled.h2`
  margin: 0;
  user-select: none;
  flex-grow: 1;

  &::before {
    content: url('/caret-down-fill.svg');
    display: inline-block;
    
    transform: rotateZ(-90deg) translate(0.125rem, 0);
    margin-right: 0.5rem;
    transition: transform 0.125s ease;
  }

  ${props => props.isopen && css`
    &::before {
        transform: rotateZ(0deg) translate(0, 0.125rem);
    }
  `}
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 2rem;
  column-gap: 0.5rem;
`

const Tag = styled.p`
  background-color: #CAFE48;
  color: black;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 3rem;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
`

const Content = styled.div`
    background-color: white;
    color: black;
    padding: 0.5rem;
    padding-bottom: 0;
    cursor: initial;
`