import React, { useMemo, useState } from 'react'
import styles from './projectSetting.module.css'
import Modal from '../../components/modal/Modal';
import IndeterminateCheckbox from '../../components/checkBox/IndeterminateCheckbox';
import Table from '../../components/table/Table';
import { createColumnHelper, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table';
import Search from '../../components/search/Search';

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
  {
    projectName: 'Test 1',
    managerId: 'MTT@123',
    expireDate: '2024-03-31',
    createdAt: '2024-01-15',
    serviceType: 'Type F',
    numberOfCamera: 103,
    numberOfROI: 32,
    numberOfViewer: 101,
    projectCode: 'KKK335',
  }
]

const makeRows = () => {
  for(let i = 0; i < 100; i++) {
    tableData.push(copyRows);
  }
}

makeRows();

export default function ProjectSetting() {
  const [data, setData] = useState([...tableData]);
  const [rowSelection, setRowSelection] = useState({})

  // Column Defs 만들기
  // Column Defs: 각 컬럼과 그 컬럼의 데이터 모델, 화면 구성 등을 설정하는 데 사용하는 객체를 의미합니다.
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
    const filteredData = tableData.filter(item =>
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
          <h2>Project Table</h2>
          <Modal />
          <Search onSubmit={handleSearchSubmit} />
        </header>
        <Table 
          table={table}
        />
      </main>
    </section>
  );
}
