import React from 'react'
import styled from 'styled-components'
import Items from '../components/itemList/items'
import SubMenu from '../components/itemList/subMenu'

const Itemlist = () => {
  return (
    <Main>
        <SubMenu/>
        <Items/>
    </Main>
  )
}

export default Itemlist

const Main = styled.div`

`