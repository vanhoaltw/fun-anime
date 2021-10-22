/* eslint-disable @next/next/no-img-element */

import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useQuery } from 'react-query'
import styles from '../../../styles/components/eposides.module.scss'
import AnimeServices from '../../services/getAnime'
export const Eposides:React.FC<{listEp: any, wallaper:string, func:any, ep:number | string}> = ({listEp, wallaper,ep,func})=>{
    const router = useRouter()
    const handleRouter = (url:string, animeId: number, ep:number)=> {
        const videoSlug = url.split("/")[1]
        router.push({
            pathname: `/anime/${videoSlug}`,
            query: { id : animeId, ep : ep }
        })
        func()
    }
    return(
        <div className={styles.anime__episodes}>
            <div className="section-title">
                <h5>List Name</h5>
            </div>
            <div>
                <div>
                    <img src={wallaper} alt={listEp.name}/>
                    <div className={styles.anime_title}>
                        <h4>{listEp.name}</h4>
                        <p>{listEp.description}</p>
                    </div>
                </div>
                {listEp.episodes.map((value:any) =>(
                    <span key={value.id} className={value.name == ep ? styles.active: ''} onClick={()=> handleRouter(value.link, listEp.id, value.name)}> {value.name} </span>
                ))}
            </div>
        </div>
    )
}