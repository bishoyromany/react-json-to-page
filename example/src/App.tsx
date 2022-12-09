import React from 'react'
import axios from 'axios'
import { PageBuilder } from 'react-json-to-page'
import type { PageBuilderT } from 'react-json-to-page'
import 'react-json-to-page/dist/index.css'

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjM1NzczOTYyLCJleHAiOjE2MzU3Nzc1NjJ9.n9PQX8w8ocKo0dMCw3g8bKhjB8Wo7f7IONFBDqfxKhs'

const App = () => {
  const axiosObj = axios
  axiosObj.defaults.headers['Authorization'] = `Bearer ${token}`
  axiosObj.defaults.baseURL = 'https://dummyjson.com'

  const data: PageBuilderT = {}

  return <PageBuilder axios={axiosObj} data={data} />
}

export default App
