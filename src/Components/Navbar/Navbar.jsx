import React, { useContext, useEffect } from 'react'
import { LinkButton } from '../Reusable/Buttons/Buttons'
import {AuthContext} from '../Context/AuthContext'
import { Link } from 'react-router-dom'
import { IconButton } from '@chakra-ui/react'

import { MdHome, MdSettings } from 'react-icons/md'
import { IoMdGlobe } from 'react-icons/io'
import { FaPlus } from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {

  const {currentUser} = useContext(AuthContext)

  return (
    <nav className="navbar" >
      <div className="navbar__container">
        <div className="navbar__header">
          <Link to="/">
            <h1>TheDevstagram</h1>
          </Link>
        </div>

        {currentUser ? (
            <div className="navbar__icons">
              <Link to="/create-post">
                <IconButton icon={<FaPlus />}  bg={'#4FD1C5'} mx="10px" _hover={{opacity:"0.85"}}/>
              </Link>
              <Link to="/">
                <IconButton icon={<IoMdGlobe />}  bg={'#4FD1C5'} _hover={{opacity:"0.85"}}/>
              </Link>
              <Link to="/feed">
                <IconButton icon={<MdHome />}  bg={'#4FD1C5'} mx="10px" _hover={{opacity:"0.85"}} />
              </Link>
              <Link to="/settings">
                <IconButton icon={<MdSettings />}  bg={'#4FD1C5'} _hover={{opacity:"0.85"}} />
              </Link>
            </div>

          ) : (
            <div className="navbar__buttons">
              <LinkButton buttonText="SignUp" buttonColor="blue" buttonSize="md" buttonVariant="filled" link="signup"/>
              <LinkButton buttonText="Login" buttonColor="blue" buttonSize="md" buttonVariant="outlined" link="/login"/>
            </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
