import React from 'react'
import './footer.css'
import {Facebook, Instagram, Twitter, GitHub} from '@mui/icons-material'

const Footer = () => {
  return (
    <>
    <footer className="footersection bg-dark">
        <footer className='left-footer'>
            <Facebook/> TaskTalk  
            <Instagram/> task_talk 
            <Twitter/> @Task_talk
        </footer>
        <footer className='center'>

        </footer>

        <footer classname='right-footer'>
            <GitHub/> n3j00
            <GitHub/> szymoks11
            </footer>
    </footer>
    </>
  )
}

export default Footer