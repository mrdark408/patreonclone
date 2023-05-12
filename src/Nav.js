import React from 'react'
import { AiOutlinePicture, AiOutlineHome } from 'react-icons/ai';
import { RiVideoLine, RiMoreLine } from 'react-icons/ri';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { FiMessageCircle } from 'react-icons/fi';
import { CiStreamOn } from 'react-icons/ci';
import './Nav.css'
import NavOptions from './NavOptions';

function Nav() {
  return (
    <div className="nav">
    <h1 className="logo"><svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="5vh" height="5vh" viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
<path d="M413 915 c-218 -48 -370 -267 -333 -477 32 -186 174 -327 360 -358 125 -21 265 26 360 120 95 96 142 234 120 357 -6 38 -20 88 -31 111 -81 184 -285 290 -476 247z m32 -290 c14 -13 25 -31 25 -40 0 -21 -19 -57 -38 -71 -13 -9 -12 -14 8 -34 28 -28 21 -73 -15 -110 -23 -22 -35 -25 -115 -28 -67 -3 -90 -1 -90 8 0 21 31 274 35 288 3 8 29 12 85 12 73 0 83 -3 105 -25z m151 13 c-3 -7 -7 -34 -10 -60 -8 -67 13 -63 67 12 40 57 44 59 85 60 l43 0 -56 -70 c-54 -68 -55 -70 -41 -98 8 -16 26 -54 40 -85 l25 -57 -40 0 c-39 0 -40 1 -70 65 -21 44 -37 65 -49 65 -14 0 -19 -12 -25 -65 l-7 -65 -34 0 c-19 0 -34 3 -34 8 0 16 32 278 36 290 2 6 19 12 38 12 24 0 34 -4 32 -12z"/>
<path d="M316 569 c-9 -47 -8 -49 22 -49 32 0 46 9 55 34 10 25 -10 46 -43 46 -23 0 -29 -5 -34 -31z"/>
<path d="M300 431 c0 -39 2 -41 29 -41 36 0 63 25 59 54 -2 17 -11 22 -45 24 l-43 3 0 -40z"/>
</g>
</svg></h1>
    <NavOptions active Icon={AiOutlineHome} text="Home" />
    <NavOptions Icon={AiOutlinePicture} text="Images" />
    <NavOptions Icon={RiVideoLine} text="Videos" />
    <NavOptions Icon={CiStreamOn} text="Stream" />
    <NavOptions Icon={FiMessageCircle} text="Message" />
    <NavOptions Icon={MdOutlineAccountCircle} text="Account" />
    <NavOptions Icon={RiMoreLine} text="More" />
    </div>
  )
}

export default Nav