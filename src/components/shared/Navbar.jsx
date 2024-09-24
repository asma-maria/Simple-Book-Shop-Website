import React from 'react'
import logo from "../../images/logo.jpg"
import { useNavigate } from 'react-router-dom'
import { NavLink,Link } from 'react-router-dom';
import { ROUTES } from '../../routes';

export default function navbar() {
    
  return (
    <header className='font-serif drop-shadow-lg '> 
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a className='hover:text-orange-600'>Home</a></li>
        <li><a className='hover:text-orange-600'>About</a></li>
        <li><a className='hover:text-orange-600'> Blog </a></li>
        <li><a className='hover:text-orange-600'>FAQ </a></li>
        
      </ul>
    </div>
   
    <Link to={ROUTES.HOME}><img src={logo} alt="Logo" className='w-12 h-12' /></Link>
    <Link to={ROUTES.HOME}><a className="btn btn-ghost text-xl"> BOOK CLUB </a></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to={ROUTES.HOME} className='hover:text-orange-600'> Home </Link></li>
      <li><Link to={ROUTES.ABOUT} className='hover:text-orange-600'> About </Link></li>
      <li><Link to="/blog" className='hover:text-orange-600'> Blog </Link></li>
      <li><Link to="/faq" className='hover:text-orange-600'>FAQ </Link></li>
      <link></link>
    </ul>
  </div>
  <div className="navbar-end flex gap-3">
  
    <Link to="/books" className="btn bg-green-300  hover:text-orange-600" >Buy Book</Link>
    
    <a className="btn bg-cyan-500 hover:text-orange-600">Sign in</a>
  </div>
</div>

     
    </header>
  )
}

