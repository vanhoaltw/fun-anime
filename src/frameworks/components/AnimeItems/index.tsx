/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import { useContext, useState, useEffect } from 'react'
import { DefaultContext } from '../../layout/default'
import styles from './anime.module.scss'
import Link from 'next/link'



export const AnimeItem:React.FC<{dataItem : any}>= ({dataItem})=>{
    const {setIsSearch, handleLoad} = useContext(DefaultContext)
    return(
        <div className="col-lg-4 col-md-6 col-sm-6" >
            <Link href={`/detail/[slug]`} as={`/detail/${dataItem.slug}`} passHref>
                <div className={styles.anime__item} onClick={()=> setIsSearch(false)}>
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
            </Link>
        </div>
    )
}