import React from 'react'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <>
    <Header/>
    {/* Using layout as a parent component to wrap over children */}
    {/* Destructuring pops.children directly with{children} */}
    <div>{children}</div>
    </>
  )
}

export default Layout