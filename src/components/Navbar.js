import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {

  return (
    <nav className={`flex py-2 w-full items-center fixed ${props.mode?'bg-[#202020] text-white':'bg-cyan-200 text-black'}`}>
      <ul className='flex ml-2 md:space-x-8 md:w-1/3  items-center font-semibold text-lg'>
        <li className='text-4xl font-extrabold md:mr-12'><a href="#">{props.title}</a></li>
        <li className='hover:text-white pl-3 duration-300'><a href="#">Home</a></li>
        <li className='hover:text-white pl-3 duration-300'><a href="#">{props.about}</a></li>
      </ul>
      <ul className='hidden w-1/3 items-center space-x-8 lg:flex pl-20'>
        <input className='border border-stone-900 p-1 pl-2 text-black rounded-lg' type="search" title='Search' placeholder='Search' name="" id="" />
        <button className='hover:bg-green-500 p-2 border border-green-900 duration-300 hover:text-white px-4 rounded-xl' title='Search' >Search</button>
      </ul>
      <ul className=' w-1/3 items-center flex'>
        <div className="customTheme absolute right-20 flex items-center pl-60 space-x-4 justify-center">
        <button className='hidden md:block rounded-full h-7 w-7 border-2 border-[#688ea3] bg-[#BBE7FE]' title='apply custom theme' onClick={()=>{props.changeCustomTheme('#BBE7FE')}}></button>
        <button className='hidden md:block rounded-full h-7 w-7 border-2 border-[#8b7996] bg-[#D3B5E5]' title='apply custom theme' onClick={()=>{props.changeCustomTheme('#D3B5E5')}}></button>
        <button className='hidden md:block rounded-full h-7 w-7 border-2 border-[#967e82] bg-[#FFD4DB]' title='apply custom theme' onClick={()=>{props.changeCustomTheme('#FFD4DB')}}></button>
        <button className='hidden md:block rounded-full h-7 w-7 border-2 border-[#a5a797] bg-[#EFF1DB]' title='apply custom theme' onClick={()=>{props.changeCustomTheme('#EFF1DB')}}></button>
        </div>
        <input className="h-[1.6rem] w-10 absolute right-[1.4rem] appearance-none bg-white border-none rounded-full" onClick={props.changeTheme} type="checkbox" name="" id="switchTheme" title="Change Theme"/>
        <div className={`switch transition-all duration-300 absolute top-[1.1rem] right-[2.4rem] bg-black h-[1.35rem] w-[1.35rem] rounded-full ${props.mode?'translate-x-[0.85rem]':''}`} title="Change Theme" onClick={props.changeTheme} id="switchThemeMoveBtn"></div>
        </ul>
    </nav>
  )
}
Navbar.propTypes = { title : PropTypes.string.isRequired,
                     about : PropTypes.string.isRequired
}
Navbar.defaultProps={
  title: 'Set title here',
  about: 'Set about here'
}
