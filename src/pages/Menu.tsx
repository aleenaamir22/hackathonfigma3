import StarterMenu from '@/components/StartMenu'
import React from 'react'

const Menu = () => {
  return (
    <div id='menu'>
      <StarterMenu/>
      <Menu/>
    </div>
  )
}

export default Menu
