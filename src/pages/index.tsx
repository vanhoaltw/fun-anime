import styles from '../../styles/Home.module.scss'
import { AnimeFilter } from '../frameworks/components/AnimeItems/AnimeFilter'
import { AnimeItemMini } from '../frameworks/components/AnimeItems/AnimeItemMini'
import { ListAnime } from '../frameworks/components/ListAnime'
import DefaultLayout from '../frameworks/layout/default'
import AnimeServices from '../services/getAnime'
import { useState } from 'react'
import { Loading } from '../frameworks/components/loading'

const section = [
    {title: 'Thịnh hành', url:'recently'},
    {title:'Có thể bạn sẽ thích ?', url:'recommended'},
    {title:'Top hay nhất', url: 'ranking/ngay'}
]    
const Home = () => {
    const [load, setLoad]= useState(false)    
    const handleLoad = ()=>{
        setLoad(true)
    }
  return (
    <DefaultLayout>
        {load ? <Loading/> : 
            <section className={`${styles.product} spad`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                                {
                                    section.map((value,index)=>(
                                        <ListAnime title={value.title} url={value.url} key={index} func={handleLoad}/>
                                    ))
                                }
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-8">
                            <div className={styles.product__sidebar}>
                                <div className={styles.product__sidebar__view}>
                                    <div className="section-title">
                                        <h5>Xem nhiều nhất</h5>
                                    </div>
                                    <ul className={styles.filter__controls}>
                                        <li className={styles.active} data-filter="*">Ngày</li>
                                        <li data-filter=".week">Tuần</li>
                                        <li data-filter=".month">Tháng</li>
                                        <li data-filter=".years">Năm</li>
                                    </ul>                              
                                    <AnimeFilter title={section[2].title} url={section[2].url} func={handleLoad}/>
                                </div>

                                <div className={styles.product__sidebar__view}>
                                    <div className="section-title">
                                        <h5>Mới cập nhật</h5>
                                    </div>                              
                                    <AnimeItemMini title={section[1].title} url={section[1].url} func={handleLoad}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>        
        }
    </DefaultLayout>
  )
}


export default Home
