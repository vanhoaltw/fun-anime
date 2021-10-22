/* eslint-disable @next/next/no-img-element */
import { useQuery } from 'react-query'
import AnimeServices from '../../../services/getAnime'
import styles from './anime.module.scss'
import { useRouter } from 'next/router'
import { Loading } from '../loading'
export const AnimeItemMini:React.FC<{title:string, url:string,func:any}> = ({title, url,func})=>{
    const {data,status} = useQuery(title, async()=>AnimeServices.getAll(url))
    const router = useRouter()
    const handleRoute = ((slug:string) => {
        console.log('=====',slug)
        router.push(`/detail/${slug}`)
        func()
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