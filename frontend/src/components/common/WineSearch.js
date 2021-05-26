import React from 'react'

const WineSearch = ({ searchText }) => {
  const [text, setText] = React.useState('')
  

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    searchText(text)
  }

  return (
    <div className='max-w-sm rounded overflow-hidden my-10'>
      <form className="w-full max-w-sm">
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
          <input onChange={handleChange} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search" />
          <button onClick={handleSubmit} className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-grey py-1 px-2 rounded" type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default WineSearch
