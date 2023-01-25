import React, { useEffect, useMemo } from 'react'
import { Card, Typography } from '@mui/material'
import { useTable, useSortBy } from 'react-table'

import { column } from './column'
import TableData from './MOCK_DATA.json'
import useRequest from '../../../../hooks/useRequest'

import './style.scss'

function DoctorsList() {
    const request = useRequest()
    const data: any = useMemo(() => TableData, [])
    const columns: any = useMemo(() => column, [])

    useEffect(() => {
        // request.get('/admin')
    }, [])
    

    const { getTableBodyProps, getTableProps, headerGroups, rows, prepareRow } = useTable({
        data,
        columns
    }, useSortBy)
    return (
        <>
            <>
                <Typography sx={{ m: '1rem' }} variant='h5'><b>Patients</b></Typography>
            </>
            <Card className='receptionist-patients-list'>
                <table {...getTableProps()} id='patients'>
                    <thead>
                        {headerGroups.map((headerGroup: any) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column: any) => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render('Header')}
                                        <span>
                                            {column.isSorted ? (column.isSortedDesc ? '🔽' : '🔼') : ''}
                                        </span>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </Card>
        </>
    )
}

export default DoctorsList