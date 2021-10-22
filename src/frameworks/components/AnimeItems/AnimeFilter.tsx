/* eslint-disable @next/next/no-img-element */
import styles from './anime.module.scss'
import { useQuery } from 'react-query'
import AnimeServices from '../../../services/getAnime'
import { useRouter } from 'next/router'
import { Loading } from '../loading'

export const AnimeFilter: React.FC<{title: string, url:string,func:any}>=({title,url,func})=>{
    const {data,status} = useQuery(title, async()=> await AnimeServices.getAll(url))
    const router = useRouter()
    const handleRoute = ((slug:string) => {
        router.push(`/detail/${slug}`)
        func()
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