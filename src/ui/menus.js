import React from 'react'
import { TiHome } from 'react-icons/ti'
import { NavLink } from 'react-router-dom'
import './style/menus.css'

const selectedStyle = {
   backgroundColor: 'white',
   color: 'slategray'
}

export const MainMenu = () =>
   <nav className='main-menu'>
      <NavLink className='mainNav' to='/'>
         <TiHome />
      </NavLink>
      <NavLink className='mainNav' to='/about' activeStyle={selectedStyle}>
         [회사 소개]
      </NavLink>
      <NavLink className='mainNav' to='/events' activeStyle={selectedStyle}>
         [이벤트]
      </NavLink>
      <NavLink className='mainNav' to='/products' activeStyle={selectedStyle}>
         [제품]
      </NavLink>
      <NavLink className='mainNav' to='/contact' activeStyle={selectedStyle}>
         [고객 지원]
      </NavLink>
   </nav>

export const AboutMenu = () =>
   <div className='about-menu'>
      <li>
         <NavLink to='/about' style={{color:'#fff', textDecoration:'none'}}>
         [회사]
         </NavLink>
      </li>
      <li>
         <NavLink to='/about/history' style={{color:'#fff', textDecoration:'none'}} activeStyle={selectedStyle}>
            [연혁]
         </NavLink>
      </li>
      <li>
         <NavLink to='/about/services' style={{color:'#fff', textDecoration:'none'}} activeStyle={selectedStyle}>
            [서비스]
         </NavLink>
      </li>
      <li>
         <NavLink to='/about/location' style={{color:'#fff', textDecoration:'none'}} activeStyle={selectedStyle}>
            [위치]
         </NavLink>
      </li>
   </div>