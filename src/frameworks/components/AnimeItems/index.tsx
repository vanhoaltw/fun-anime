/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import { useState } from 'react'
import { Loading } from '../loading'
import styles from './anime.module.scss'
export const AnimeItem:React.FC<{dataItem : any,func:any}>= ({dataItem,func})=>{
    const router = useRouter()
    const handleRoute = ((slug:string) => {        
        router.push(`/detail/${slug}`)
        func()
    })
    return(
        <div className="col-lg-4 col-md-6 col-sm-6" >
            <div className={styles.anime__item} onClick={()=>handleRoute(dataItem.slug)}>
                <img
                    src={dataItem.thumbnail}
                    alt={dataItem.name}
                />
                <div className={`${styles.anime__item__pic} set-bg`} >
                    <div className={styles.ep}>{dataItem.time}</div>
                    <div className={styles.view}><i className="fa fa-eye"></i> {dataItem.view}</div>
                </div>
                <div className={styles.anime__item__text}>
                    <h5><a href="#">{dataItem.name}</a></h5>
                </div>
            </div>
        </div>
    )
}