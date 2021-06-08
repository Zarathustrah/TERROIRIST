import React from 'react'

const initialState = {
  data: null,
  isLoading: true,
  error: null,
}

const useFetch = (req, arg = null) => {
  const [state, setState] = React.useState(initialState)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await req(arg)
        setState({ data, isLoading: false, error: null })
      } catch (err) {
        setState({ error: true, isLoading: false, data: null })
      }
    }
    getData()
  }, [req, arg])

  return state
  
}

export default useFetch