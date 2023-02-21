import React from 'react'
import logo from '../assets/momoguro-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='bg-black border-2 border-black border-t-momo-yellow p-10 text-white flex justify-between'>
        <div>
            <div className='mb-5'><img src={logo} alt="Logo" height={150} width={150} /></div>
            <div><span className='p-2'><FontAwesomeIcon icon={faDiscord} className='h-6' /></span><span className='p-2'><FontAwesomeIcon icon={faTwitter} className='h-6' /></span></div>
        </div>
        <div><span className='font-bold text-1xl pt-2'>Privacy Policy</span></div>
    </div>
  )
}

export default Footer