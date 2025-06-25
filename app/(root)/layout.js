import React from 'react'
import Navbar from '../Components/Navbar'

const layout = ({children}) => {
  return (
    <>
<Navbar/>
      {children}
    </>
  )
}

export default layout
