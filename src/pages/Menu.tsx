import Dessert from '@/components/Dessert'
import StarterMenu from '@/components/StartMenu'
import React from 'react'

const Menu = () => {
  return (
    <div id='menu'>
      <StarterMenu/>
      <Dessert/>
      <Menu/>
    </div>
  )
}

export default Menu
