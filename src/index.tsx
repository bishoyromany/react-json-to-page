import * as React from 'react'
import type { AxiosStatic } from 'axios'
import './index.scss'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import type { PageBuilderTypes } from './types/PageBuilderTypes'
import Table from './Component/Table'

interface Props {
  data: PageBuilderTypes
  axios: AxiosStatic
}

export const PageBuilder = ({}: Props) => {
  return (
    <div id='ReactJSONToPageContainer'>
      <Table></Table>
    </div>
  )
}

export type PageBuilderT = PageBuilderTypes
