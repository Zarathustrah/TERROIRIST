import React from 'react'

const initalState = {
  data: null,
  isLoading: true,
  error: null,
}

const useFetch = (req, arg) => {
  const [state, setState] = React.useState(initalState)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await req(arg)
        setState({ data, isLoading: false, error: null })
        data.sort((a, b) => a.country.localeCompare(b.country))
      } catch (err) {
        setState({ error: true, isLoading: false, data: null })
      }
    }
    getData()
  }, [req, arg])

  return state
  
}

export default useFetch