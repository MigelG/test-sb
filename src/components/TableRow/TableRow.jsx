import React from 'react'
import TableCell from '../TableCell/TableCell'
import './TableRow.css'

const TableRow = ({ id, title, body, isHeading }) => {
    return (
        <tr className='table__row'>
            <TableCell isHeading={isHeading} column='id'>
                {id}
            </TableCell>
            <TableCell isHeading={isHeading} column='title'>
                {title}
            </TableCell>
            <TableCell isHeading={isHeading} column='body'>
                {body}
            </TableCell>
        </tr>
    )
}

export default TableRow