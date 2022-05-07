import React from 'react'
import TableRow from '../TableRow/TableRow'
import logo from '../../images/sort-icon.svg'
import './TableHead.css'

const TableHead = () => {
    const icon = (<img src={logo} alt='иконка' />)
    const id = (<>ID{icon}</>)
    const title = (<>Заголовок{icon}</>)
    const body = (<>Описание{icon}</>)
    return (
        <thead className='table__head'>
            <TableRow
                id={id}
                title={title}
                body={body}
                isHeading={true}
            />
        </thead>
    )
}

export default TableHead