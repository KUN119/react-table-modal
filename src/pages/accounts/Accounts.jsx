import React, { useEffect, useMemo, useState } from 'react';
import styles from './accounts.module.css';
import { PiUserCirclePlusBold } from "react-icons/pi";
import Table from '../../components/table/Table';
import IndeterminateCheckbox from '../../components/checkBox/IndeterminateCheckbox';
import { createColumnHelper, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
import Search from '../../components/search/Search';
import DeleteRow from '../../components/deleteRow/DeleteRow';

const arr = [
    {
        ID: 'MTT@123',
        Role: 'Editor',
        Slide: 1,
        Project: 'ACI',
        CreatedAt: '2024-03-31',
        DeviceToken: 103,
    }
]

export default function Accounts() {
    const [MOCK_DATA, setMOCK_DATA] = useState(arr);
    const [data, setData] = useState([...MOCK_DATA]);
    const [rowSelection, setRowSelection] = useState({});

    useEffect(() => {
        setData([...MOCK_DATA]);
      }, [MOCK_DATA]);

    const columnHelper = createColumnHelper();
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
            columnHelper.accessor('ID', {header: 'ID'}),
            columnHelper.accessor('Role', {header: 'Role'}),
            columnHelper.accessor('Slide', {header: 'Slide'}),
            columnHelper.accessor('Project', {header: 'Project'}),
            columnHelper.accessor('CreatedAt', {header: 'Created At'}),
            columnHelper.accessor('DeviceToken', {header: 'Device Token'}),
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
        // for pagination
        getPaginationRowModel: getPaginationRowModel(),
        initialState: {
            pagination: {
                pageIndex: 0, //custom initial page index
                pageSize: 15, //custom default page size
            },
        },
    });

    const handleSearchSubmit = (filterValue) => {
        const filteredData = data.filter(item =>
            Object.values(item).some(val =>
                String(val).toLowerCase().includes(filterValue.toLowerCase())
            )
        );
        setData(filteredData);
    };

    return (
        <section className={styles.container}>
            <main className={styles.white_box}>
                <header className={styles.header}>
                    <h2>Accounts Table</h2>
                    <DeleteRow
                        setMOCK_DATA={setMOCK_DATA}
                        rowSelection={rowSelection}
                        setRowSelection={setRowSelection}
                        data={data}
                    />
                    <button><PiUserCirclePlusBold /></button>
                    <Search onSubmit={handleSearchSubmit} />
                </header>
                <Table 
                    table={table}
                />
            </main>
        </section>
    )
}
