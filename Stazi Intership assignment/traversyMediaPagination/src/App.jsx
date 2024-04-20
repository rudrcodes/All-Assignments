import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Posts from './components/Posts'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(3)


  //get current Posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts?.slice(indexOfFirstPost, indexOfLastPost)
  useEffect(() => {

    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data)
      console.log(res.data)
      setLoading(false)
    }
    fetchPosts()

  }, [])

  return (
    <>
      <h1>React Pagination</h1>
      <Posts posts={currentPosts} loading={loading} />
    </>
  )
}

export default App
