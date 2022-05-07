import { useMemo } from 'react'

export const useSortedPosts = (posts, sort, revers) => {
    const sortedPosts = useMemo(() => {
        if (sort) {

            if (!revers) {
                return [...posts].sort((a, b) => {
                    if (typeof a[sort] === 'string') {
                        return a[sort].localeCompare(b[sort])
                    } else {
                        return a[sort] - b[sort]
                    }
                })
            } else {
                return [...posts].sort((a, b) => {
                    if (typeof a[sort] === 'string') {
                        return b[sort].localeCompare(a[sort])
                    } else {
                        return b[sort] - a[sort]
                    }
                })
            }

        }
        return posts
    }, [sort, posts, revers])

    return sortedPosts
}

export const usePosts = (posts, query) => {
    const sortedPosts = useSortedPosts(posts, query.sort, query.revers)

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post =>
            post.title.toLowerCase().includes(query.search.toLowerCase())
            ||
            post.body.toLowerCase().includes(query.search.toLowerCase()))
    }, [sortedPosts, query])

    return sortedAndSearchedPosts
}