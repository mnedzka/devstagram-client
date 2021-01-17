import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Select, useToast } from '@chakra-ui/react'
import { AuthContext } from '../Context/AuthContext'
import { ActionButton } from '../Reusable/Buttons/Buttons'
import { useHistory } from 'react-router-dom'
import './Create.css'

const CreatePost = () => {
  const history = useHistory()
  const toast = useToast()
  const { currentUser } = useContext(AuthContext)

  const [subreddits, setSubreddits] = useState([])

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [selectedSubreddit, setSelectedSubreddit] = useState('All')
  const [userName, setUserName] = useState(null)


  const handleSubmit = async(e) => {
    e.preventDefault()
    if(currentUser.uid){
      const newContent = await content.replace(new RegExp('\r?\n','g'), '<br/>')

      const formatDetails = await {
        title,
        content: newContent ,
        subreddit: selectedSubreddit,
        userName: currentUser.displayName
      }
      
      const response = await axios.post('http://localhost:5000/posts/add', formatDetails)
      history.push(`/posts/${response.data.postID}`)
    } else {
      toast({
        title: "Failed to add post",
        description: "You need to create an account to post ",
        status: "error",
        duration: 9000,
        isClosable: true,
      })
      console.log("failed")
    }
  }

  useEffect(() => {
    const fetchSubreddits = async() => {
      const subreddits = await axios.get('http://localhost:5000/subreddits')
      setSubreddits(subreddits.data.subreddits.map(subreddit => subreddit.subreddit))
    }

    fetchSubreddits()
  }, [])
  return (
    <section className="create">
      <div className="create__container">
        {currentUser ? (
          <form onSubmit={handleSubmit} className="create__form">
            
            <div className="create__input">
              <input type="text" required value={title} onChange={e => setTitle(e.target.value)}/>
              <label className="create__label">Title</label>
            </div>
            <Select value={selectedSubreddit} onChange={e => setSelectedSubreddit(e.target.value)} variant="filled" bg='#4FD1C5' color="black" _hover={{bg: "#4FD1C5"}} _focus={{bg: "#4FD1C5"}}>
                {
                  subreddits.map((subreddit) => {
                    return(
                      <option value={subreddit}>{subreddit}</option>
                    )
                  })
                }
              </Select>
            <div className="create__input">
              <textarea type="text" required value={content} onChange={e => setContent(e.target.value)}/>
              <label className="create__label">Text</label>
            </div>
              <ActionButton buttonText="Submit" buttonVariant="filled" buttonColor="blue" buttonSize="md" />
              
          </form>
        ): (
          
          toast({
            title: "Failed to load component",
            description: "You need to create an account to access this component ",
            status: "error",
            duration: 2000,
            isClosable: true,
          })
        )}


      </div>
    </section>
  )
}

export default CreatePost
