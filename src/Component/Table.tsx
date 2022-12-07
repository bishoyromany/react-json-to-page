import * as React from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import { Button } from '@mui/material'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName.name', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`
  },
  {
    field: 'actions',
    headerName: 'Actions',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    renderCell: () => <Button>Edit</Button>
  }
]

const rows = [
  { id: 1, lastName: { name: "'Snow'" }, firstName: 'Jon', age: 35 },
  { id: 2, lastName: { name: "'Snow'" }, firstName: 'Cersei', age: 42 },
  { id: 3, lastName: { name: "'Snow'" }, firstName: 'Jaime', age: 45 },
  { id: 4, lastName: { name: "'Snow'" }, firstName: 'Arya', age: 16 },
  { id: 5, lastName: { name: "'Snow'" }, firstName: 'Daenerys', age: null },
  { id: 6, lastName: { name: "'Snow'" }, firstName: null, age: 150 },
  { id: 7, lastName: { name: "'Snow'" }, firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: { name: "'Snow'" }, firstName: 'Rossini', age: 36 },
  { id: 9, lastName: { name: "'Snow'" }, firstName: 'Harvey', age: 65 }
]

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}
