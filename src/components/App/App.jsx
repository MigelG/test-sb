import React, { useEffect } from 'react'
import Table from '../Table/Table'
import { getPosts } from '../../utils/api'
import { useDispatch, useSelector } from 'react-redux'
import { setPosts } from '../../store/postSlice'
import SearchBar from '../SearchBar/SearchBar'
import './App.css'
import Navigation from '../Navigation/Navigation'
import { Navigate, Route, Routes } from 'react-router-dom'

const App = () => {
  const dispatch = useDispatch()
  const { limit, page } = useSelector(state => state.posts)

  useEffect(() => {
    getPosts()
      .then((res) => {
        dispatch(setPosts(res))
      })
  }, [dispatch, limit, page])

  return (
    <div className='content'>
      <SearchBar />
      <Routes>
        <Route path='/' element={<Navigate to='/1' />} />
        <Route path='/:pageId' element={<Table />} />
      </Routes>
      <Navigation />
    </div>
  )
}

export default App;
