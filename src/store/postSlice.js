import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    posts: [],
    limit: 10,
    totalPages: 0,
    page: 1,
    query: {
        search: '',
        sort: 'id',
        revers: false
    }
}

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => { state.posts = action.payload },
        setTotalPages: (state, action) => { state.totalPages = action.payload },
        setPage: (state, action) => { state.page = action.payload },
        setQuery: (state, action) => { state.query = action.payload }
    }
})

export const {
    setPosts,
    setTotalPages,
    setPage,
    setQuery,
} = postSlice.actions
export default postSlice.reducer