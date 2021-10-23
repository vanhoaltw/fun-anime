/* eslint-disable @next/next/no-img-element */
import { useQuery } from 'react-query'
import AnimeServices from '../../../services/getAnime'
import styles from './anime.module.scss'
import { useRouter } from 'next/router'
import { Loading } from '../loading'
import { useContext } from 'react'
import { DefaultContext } from '../../layout/default'

export const AnimeItemMini:React.FC<{title:string, url:string}> = ({title, url})=>{
    const {data,status} = useQuery(title, async()=>AnimeServices.getAll(url))
    const router = useRouter()
    const {handleLoad} = useContext(DefaultContext)
    const handleRoute = ((slug:string) => {
        router.push(`/detail/${slug}`)
        handleLoad()
    })
    return (
            <div className={styles.filter__gallery}>
            {data? data.map((value,index) =>(
                <div key={index} className={styles.comment__item} onClick={()=> handleRoute(value.slug)}>
                    <div className={styles.comment__item__pic}>
                        <img src={value.thumbnail} alt={value.name}/>
                    </div>
                    <div className={styles.comment__item__text}>
                        <ul>
                            <li>Active</li>
                            <li>Movie</li>
                        </ul>
                        <h5><a href="#">{value.name}</a></h5>
                        <span><i className="fa fa-eye"></i>{value.view} Viewes</span>
                    </div>                                                                
                </div>
            )) : <Loading/>}
            </div>
    )
}