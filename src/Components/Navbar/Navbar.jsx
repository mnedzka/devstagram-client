import React, { useContext, useEffect, useState } from 'react'
import { LinkButton } from '../Reusable/Buttons/Buttons'
import {AuthContext} from '../Context/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import { IconButton, Select } from '@chakra-ui/react'
import { MdHome, MdSettings } from 'react-icons/md'
import { IoMdGlobe } from 'react-icons/io'
import { FaPlus } from 'react-icons/fa'

import axios from 'axios'

import './Navbar.css'

const Navbar = () => {
  const history = useHistory()
  const {currentUser} = useContext(AuthContext)

  const [subreddits, setSubreddits] = useState([])
  const [selectedSubreddits, setSelectedSubreddits] = useState()

  const handleRoute = e => {
    console.log(e.target.value)
    history.push(`/subreddit/${e.target.value}`)
  }

  useEffect(() => {
    const fetchSubreddits = async() => {
      const fetchSubreddits = await axios.get('http://localhost:5000/subreddits')
      setSubreddits(fetchSubreddits.data.subreddits.map(subreddit => subreddit.subreddit))
      console.log(fetchSubreddits)
      console.log('object')
    }

    fetchSubreddits()
  }, [])

  return (
    <nav className="navbar" >
      <div className="navbar__container">
        
        <div className="navbar__header">
          <Link to="/">
            <h1>TheDevstagram</h1>
          </Link>
        </div>

        <div className="navbar__search">
          <Select placeholder="Select a subreddit" onChange={e => handleRoute(e)} variant="outline" width="100%" bg='#4FD1C5' color="black" _hover={{bg: "#4FD1C5"}} _focus={{bg: "#4FD1C5"}}>
            {
              subreddits.map(subreddit => {
                return (
                  <option value={subreddit}>{subreddit}</option>
                )
              })
            }
          </Select>
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
              <LinkButton buttonText="Login" buttonColor="blue" buttonSize="md" buttonVariant="outlined" link="login"/>
            </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
