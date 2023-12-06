import React from 'react'
import Header from './Header'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
  return (
    <>
    <Header/>
    {/* Using layout as a parent component to wrap over children */}
    {/* Destructuring pops.children directly with{children} */}
    <div>{children}</div>
    <Footer/>
    </>
  )
}

export default Layout