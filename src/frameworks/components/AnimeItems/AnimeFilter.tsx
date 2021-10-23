/* eslint-disable @next/next/no-img-element */
import styles from './anime.module.scss'
import { useQuery } from 'react-query'
import AnimeServices from '../../../services/getAnime'
import { useRouter } from 'next/router'
import { Loading } from '../loading'
import { useContext, useState } from 'react'
import { DefaultContext } from '../../layout/default'

export const AnimeFilter: React.FC<{title: string, url:string}>=({title,url})=>{
    const {data,status} = useQuery(title, async()=> await AnimeServices.getAll(url))
    const {handleLoad} = useContext(DefaultContext)
    const router = useRouter()
    const handleRoute = ((slug:string) => {
        router.push(`/detail/${slug}`)
        handleLoad()
    })
    return(
        <div className={styles.filter__gallery}>
            {data? data.map((value,index) =>(
                <div key={index} className={styles.anime__filter} onClick={()=> handleRoute(value.slug)}>
                        <img src={value.thumbnail} alt={value.name}/>
                        <div className={styles.ep}>{value.time}</div>                            
                        <div className={styles.view}><i className="fa fa-eye"></i>{value.view}</div>                           
                        <h5><a href="#">{value.name}</a></h5>                                                                  
                </div>
            )) : <Loading/>}
        </div>
    )
}