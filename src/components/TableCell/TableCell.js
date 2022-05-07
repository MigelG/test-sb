import { createElement } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setQuery } from '../../store/postSlice'
import './TableCell.css'

const TableCell = ({ isHeading, column, children }) => {
    const { query } = useSelector(state => state.posts)
    const dispatch = useDispatch()

    if (isHeading) {
        return createElement(
            'th',
            {
                className: `table__cell table__cell_type_${column} table__cell_th`,
                onClick: () => {
                    if (query.sort === column) {
                        dispatch(setQuery({ ...query, revers: !query.revers }))
                    } else {
                        dispatch(setQuery({ ...query, sort: column, revers: false }))
                    }
                }
            },
            children
        )
    }

    return createElement(
        'td',
        {
            className: `table__cell table__cell_type_${column}`
        },
        children
    )
}
export default TableCell