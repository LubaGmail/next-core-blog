import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from './main-nav.module.css'
import Logo from './logo'

const MainNav = () => {
  return (
      <>
          <header className={styles.header}>
            <Link href='/'>
                <Logo />
            </Link>
        
            <nav>
                <ul>
                    <li>
                        <Link href='/posts'>Posts</Link>      
                    </li>
                    <li>
                        <Link href='#'>Contact</Link>      
                    </li>
                </ul>      
            </nav>  
        </header>    
      </>
  ) 
}

export default MainNav

