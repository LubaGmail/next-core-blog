import Head from 'next/head'
import Image from 'next/image'

import Logo from './logo'
import MainNav from './main-nav'

const Layout = (props) => {
  return (
    <>
          <MainNav />  
          <main>{props.children}</main>
    </>
  ) 
}

export default Layout
