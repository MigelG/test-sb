import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { usePagination } from '../../hooks/usePagination'
import './Navigation.css'

const Navigation = () => {
    const { totalPages, page } = useSelector(state => state.posts)
    const [backLink, setBackLink] = useState(1)
    const [forwardLink, setForwardLink] = useState(1)
    const [backLinkIsDisabled, setBackLinkIsDisabled] = useState(false)
    const [forwardLinkIsDisabled, setForwardLinkIsDisabled] = useState(false)
    const pagesArray = usePagination(totalPages)

    useEffect(() => {
        if (page > 1) {
            setBackLink(page - 1)
            setBackLinkIsDisabled(false)
        } else {
            setBackLinkIsDisabled(true)
        }
        if (page < totalPages) {
            setForwardLink(Number(page) + 1)
            setForwardLinkIsDisabled(false)
        } else {
            setForwardLinkIsDisabled(true)
        }
    }, [page, totalPages])

    return (
        <div className='nav'>
            <Link
                to={`/${backLink}`}
                className={`nav__link nav__link_direction${backLinkIsDisabled ? ' disabled' : ''}`}
            >
                Назад
            </Link>
            <div className='nav__pages'>
                {
                    pagesArray.map(p => <NavLink
                        key={p}
                        to={`/${p}`}
                        className='nav__link nav__link_page'
                    >
                        {p}
                    </NavLink>)
                }
            </div>
            <Link
                to={`/${forwardLink}`}
                className={`nav__link nav__link_direction${forwardLinkIsDisabled ? ' disabled' : ''}`}
            >
                Далее
            </Link>
        </div>
    )
}

export default Navigation