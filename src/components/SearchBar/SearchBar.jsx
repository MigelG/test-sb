import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import logo from '../../images/search-icon.svg'
import { setQuery } from '../../store/postSlice'
import './SearchBar.css'

const SearchBar = () => {
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const { query } = useSelector(state => state.posts)
    const [request, setRequest] = useState('')

    const handleChange = (e) => {
        setRequest(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setQuery({ ...query, search: request }))
        navigation('/1')
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <input
                type='input'
                className='form__input'
                placeholder='Поиск'
                value={request}
                onChange={handleChange}
            />
            <button type='submit' className='form__submit'>
                <img src={logo} alt='Кнопка поиска' />
            </button>
        </form>
    )
}

export default SearchBar