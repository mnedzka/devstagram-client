import React,{ useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from '../Context/AuthContext'
import { useParams } from 'react-router-dom'

const UserProfile = () => {
  const { BASE_URL } = useContext(AuthContext)
  const { username } = useParams()
  const [content, setContent] = useState([])


  useEffect(() => {

    const getUserData = async() => {
      const userAbout = await axios.get(`${BASE_URL}/user/${username}`)
      console.log(userAbout)
    }

    // getUserData()

    console.log(username)
  }, [])
  return (
    <section className="user">
      <div className="user__container">

      </div>
    </section>
  )
}

export default UserProfile
