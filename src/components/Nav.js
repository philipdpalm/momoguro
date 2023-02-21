import React from 'react'
import logo from '../assets/momoguro-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const Nav = () => {
  return (
    <div className='flex justify-between p-10'>
        <div className='mt-2'><img src={logo} alt="Logo" height={300} width={300} /></div>
        <div className='flex text-white'>
        <div className='bg-momo-purple p-4 m-2 cursor-pointer'><FontAwesomeIcon icon={faTwitter} className='h-7' /></div>
        <div className='bg-momo-purple p-4 m-2 cursor-pointer'><FontAwesomeIcon icon={faEnvelope} className='h-7'/></div>
        </div>
    </div>
  )
}

export default Nav