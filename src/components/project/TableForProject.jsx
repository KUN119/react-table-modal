import React, { useEffect, useMemo, useState } from 'react'
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import styles from './tableForProject.module.css'
import IndeterminateCheckbox from '../checkBox/IndeterminateCheckbox';

const copyRows = {
    projectName: 'Project 1',
    managerId: 'M123',
    expireDate: '2024-03-31',
    createdAt: '2024-01-15',
    serviceType: 'Type A',
    numberOfCamera: 5,
    numberOfROI: 3,
    numberOfViewer: 10,
    projectCode: 'ABC123',
}
let tableData = [
    
]

const makeRows = () => {
    for(let i = 0; i < 100; i++) {
        tableData.push(copyRows);
    }
}

makeRows();

// const tableData = [
//     {
//         projectName: 'Project 1',
//         managerId: 'M123',
//         expireDate: '2024-03-31',
//         createdAt: '2024-01-15',
//         serviceType: 'Type A',
//         numberOfCamera: 5,
//         numberOfROI: 3,
//         numberOfViewer: 10,
//         projectCode: 'ABC123',
//     },
//     {
//         projectName: 'Project 1',
//         managerId: 'M123',
//         expireDate: '2024-03-31',
//         createdAt: '2024-01-15',
//         serviceType: 'Type A',
//         numberOfCamera: 5,
//         numberOfROI: 3,
//         numberOfViewer: 10,
//         projectCode: 'ABC123',
//     },
// ];

// Column Defs 만들기
// Column Defs: 각 컬럼과 그 컬럼의 데이터 모델, 화면 구성 등을 설정하는 데 사용하는 객체를 의미합니다.
const columnHelper = createColumnHelper();

export default function TableForProject() {
    const [data, setData] = useState([...tableData]);
    const [rowSelection, setRowSelection] = useState({})

    const columns = useMemo(() => {
        return [
            {
                id: 'select',
                // header: 모든 row 선태/해제 하기위해 컴포넌트 호출
                header: ({ table }) => (
                  <IndeterminateCheckbox
                    {...{
                      checked: table.getIsAllRowsSelected(),
                      indeterminate: table.getIsSomeRowsSelected(),
                      onChange: table.getToggleAllRowsSelectedHandler(),
                    }}
                  />
                ),
                // column
                cell: ({ row }) => (
                  <div className="px-1">
                    <IndeterminateCheckbox
                      {...{
                        checked: row.getIsSelected(),
                        disabled: !row.getCanSelect(),
                        indeterminate: row.getIsSomeSelected(),
                        onChange: row.getToggleSelectedHandler(),
                      }}
                    />
                  </div>
                ),
            },
            columnHelper.accessor('projectName', {header: 'Project Name'}),
            columnHelper.accessor('managerId', {header: 'Manager ID'}),
            columnHelper.accessor('expireDate', {header: 'Expire Date'}),
            columnHelper.accessor('createdAt', {header: 'Created At'}),
            columnHelper.accessor('serviceType', {header: 'Service Type'}),
            columnHelper.accessor('numberOfCamera', {header: 'Number of Camera'}),
            columnHelper.accessor('numberOfROI', {header: 'Number of ROI'}),
            columnHelper.accessor('numberOfViewer', {header: 'Number of Viewer'}),
            columnHelper.accessor('projectCode', {header: 'Project Code'}),
        ];
    }, []);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        // for checkbox
        onRowSelectionChange: setRowSelection,
        state: {
            rowSelection,
        },
        enableRowSelection: true,
        // 
    });

    console.log(rowSelection); // {0: true, 1: true} flase의 경우는 나오지 않음

    return (
        <div>
            <table>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
