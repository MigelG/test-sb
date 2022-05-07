import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { usePosts } from '../../hooks/usePosts'
import { setPage, setTotalPages } from '../../store/postSlice'
import TableHead from '../TableHead/TableHead'
import TableRow from '../TableRow/TableRow'
import './Table.css'

const Table = () => {
    const dispatch = useDispatch()
    const { pageId } = useParams()
    const [visiblePosts, setVisiblePosts] = useState([])
    const { posts, page, query, limit } = useSelector(state => state.posts)

    const sortedAndSearchedPosts = usePosts(posts, query)

    useEffect(() => {
        const totalCount = sortedAndSearchedPosts.length
        dispatch(setTotalPages(Math.ceil(totalCount / limit)))
        setVisiblePosts(sortedAndSearchedPosts.slice((page - 1) * limit, page * limit))
    }, [dispatch, limit, page, sortedAndSearchedPosts])

    useEffect(() => {
        dispatch(setPage(pageId))
    }, [dispatch, pageId])

    return (
        <table className='table'>
            <TableHead />
            <tbody className='table__body'>
                {
                    visiblePosts.map(post => <TableRow
                        key={post.id || post.key}
                        id={post.id}
                        title={post.title}
                        body={post.body} />)
                }
            </tbody>
        </table>
    )
}

export default Table