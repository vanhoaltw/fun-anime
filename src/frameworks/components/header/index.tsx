/* eslint-disable @next/next/no-img-element */
import { useContext } from "react"
import { mainMenu, GENRES, RANKINGS } from "../../../../constant"
import { DefaultContext } from "../../layout/default"
import styles from './header.module.scss'
import Link from 'next/link'
import { useRouter } from "next/router"

export const Header = ()=>{
    const {setIsSearch,handleLoad} = useContext(DefaultContext)
    const renderMenu = mainMenu.map((value,index) =>(
        <li className={index ==0 ? styles.active : ''} key={index}><Link href={value.url}>{value.name}</Link>
            {value.list ? <ul className={styles.dropdown}>
                {index == 1 ? GENRES.map((value,index) => <li key={index}><Link href={'/[categories]/[slug]'} as={`/genres/${value.slug}`}><a>{value.name}</a></Link></li>) 
                    :    RANKINGS.map((value,index) => <li key={index}><Link href={'/[categories]/[slug]'} as={`/ranking/${value.slug}`}><a>{value.name}</a></Link></li>)}
            </ul> : ''}
        </li>
    ))
    return(
        <header className={styles.header}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className={styles.header__logo}>
                                <Link href='/'>
                                    <a href="./index.html">
                                        <i className="fas fa-shipping-fast"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="header__nav">
                                <nav className={styles.header__menu}>
                                    <ul>
                                        {renderMenu}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className={styles.header__right}>
                                <a className={styles.search_btn} onClick={()=> setIsSearch(true)}><i className="fas fa-search"></i></a>
                                <a ><i className="fas fa-user"></i></a>
                            </div>
                        </div>
                    </div>
                    <div id="mobile-menu-wrap"></div>
                </div>
        </header>
    )
}