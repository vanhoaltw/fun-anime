/* eslint-disable @next/next/no-img-element */
import { mainMenu, categories } from "../../../../constant"
import styles from './header.module.scss'


export const Header = ()=>{
    const renderCate = categories.map((value,index) => <li key={index}><a>{value.name}</a></li>)
    const renderMenu = mainMenu.map((value,index) =>(
        <li className={index ==0 ? styles.active : ''} key={index}><a href='#'>{value.name}</a>
            {value.list ? <ul className={styles.dropdown}>
                    {renderCate}
            </ul> : ''}
        </li>
    ))

    return(
        <header className={styles.header}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className={styles.header__logo}>
                                <a href="./index.html">
                                    <i className="fas fa-ambulance"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="header__nav">
                                <nav className={`${styles.header__menu} mobile-menu`}>
                                    <ul>
                                        {renderMenu}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className={styles.header__right}>
                                <a href="#" className="search-switch"><i className="fas fa-search"></i></a>
                                <a href="./login.html"><i className="fas fa-user"></i></a>
                            </div>
                        </div>
                    </div>
                    <div id="mobile-menu-wrap"></div>
                </div>
        </header>
    )
}