import * as React from 'react'
import './index.scss'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import Table from './Component/Table'

interface Props {
  text?: string
}

export const ExampleComponent = ({}: Props) => {
  return (
    <div id='ReactJSONToPageContainer'>
      <Table></Table>
    </div>
  )
}
