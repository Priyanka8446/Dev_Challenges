import React from 'react'
import bg_cafe from '../assets/bg-cafe.jpg'
import './Layout.css'
import Content from './Content'

function Layout() {
  return (
    <div className='bg-container'>
        <div className='bg-banner'>
            <img src={bg_cafe} alt="cafe" />
        </div>
        <Content/>
    </div>
  )
}

export default Layout