import { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'

import ListItem from './ListItem'

export default function List(props) {
    const [filter, setFilter] = useState('ALL')

    return (
        <Wrapper>
            <FilterArea>
                <SearchIcon src={'/search.svg'}/>
                <Search placeholder='SEARCH '></Search>
                <FilterOptions>
                    FILTER BY
                    <FilterOption selected={filter === 'ALL'} onClick={_ => setFilter('ALL')}>ALL</FilterOption>
                    <FilterOption selected={filter === 'NAME'} onClick={_ => setFilter('NAME')}>NAME</FilterOption>
                    <FilterOption selected={filter === 'TAG'} onClick={_ => setFilter('TAG')}>TAG</FilterOption>
                </FilterOptions>
            </FilterArea>
            <Items>
                {props.items.map(trait => { return <ListItem key={trait.name} trait={trait} /> })}
            </Items>
            <Empty hidden={props.items && props.items.length > 0}>EMPTY TRAIT COLLECTION</Empty>
        </Wrapper>
    )
}

const Search = styled.input`
    border: none;
    height: 1.5rem;
    outline: none;
    background-color: #E0E0E0;
    padding-left: 2rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-family: 'Prompt';
    font-weight: 700;
    color: #606060;
    opacity: 70%;
    position: relative;
    outline: 0rem solid #6060601e;
    outline-offset: 0rem;
    transition: outline 0.25s cubic-bezier(.35,2,.64,1);

    &:focus-visible {
        outline: 0.25rem solid #6060601e;
        outline-offset: 0rem;
    }
`

const Items = styled.div`
    
`

const FilterArea = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 1rem;
`

const SearchIcon = styled.img`
    position: absolute;
    left: 0.5rem;
    margin-bottom: 0.5rem;
    opacity: 30%;
`

const FilterOptions = styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    margin-left: 1rem;
    
    padding: 0;
`

const FilterOption = styled.p`
    margin-right: 0rem;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    cursor: pointer;

    ${props => props.selected && css`
        background-color: black;
        color: white;
    `}
`

const Wrapper = styled.div`
  background-color: white;
  overflow: scroll;
  position: relative;
  padding: 0.5rem;
 
`

const Empty = styled.p`
    text-align: center;
    color: gray;

    ${props => props.hidden && css`
        display: none;
    `}
`
