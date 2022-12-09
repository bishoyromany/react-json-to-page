export type FormInput = {
  /**
   * Input name
   */
  name: string
  /**
   * Input label
   */
  label: string
  /**
   * Description
   */
  description?: string
  /**
   * Input type
   */
  type:
    | 'text'
    | 'email'
    | 'phone'
    | 'number'
    | 'file'
    | 'image'
    | 'select'
    | 'checkbox'
    | 'radio'
    | 'tags'
  /**
   * Default value from the giving object
   */
  default?: string
  /**
   * data api if exists
   */
  api?: string
  /**
   * Data object array that's fetched over API or manually added
   */
  data?: object[]
  /**
   * structure of select, checkbox, radio, tags
   */
  structure?: {
    label: string
    value: string
  }

  handler: (data: any) => any
}

export type Column = {
  /**
   * Column header title
   */
  title: string
  /**
   * Column name accepts nested objects
   * key.ky2.key3 etc...
   */
  name: string
  /**
   * Show in table
   */
  table?: boolean
  /**
   * Show in edit form
   */
  edit?: FormInput
  /**
   * Show in add form
   */
  add?: FormInput
  /**
   * actions columns
   */
  actions?: {
    /**
     * Edit API Call
     */
    edit?: {
      /**
       * Delete API Call
       */
      api: string
      title?: string
    }
    /**
     * Clone API Call
     */
    clone?: {
      /**
       * Clone Record API Call
       */
      api: string
      title?: string
    }
    /**
     * delete API Call
     */
    delete?: {
      /**
       * Delete API Call
       */
      api: string
      title?: string
    }
    /**
     * custom handler
     */
    handler?: (d: any) => any
  }

  handler: (data: any) => any
}

export type Toolbar = {
  deleteAll?: {
    title?: string
    api: string
  }
  add?: {
    title?: string
    api: string
  }
  export?: {
    title?: string
    api: string
  }
  import?: {
    title?: string
    api: string
  }
}

export type PageBuilderTypes = {
  columns: Column[]
  toolbar: Toolbar
}

export default PageBuilderTypes
