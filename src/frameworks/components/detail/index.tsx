/* eslint-disable @next/next/no-img-element */
import styles from './detail.module.scss'
import { BreadCrumb } from './Breadcrumb'
import { useRouter } from 'next/router'
import { detailType } from '../../../../type'
import { Loading } from '../loading'
import { useState } from 'react'

export const DetailAnime:React.FC<{data: detailType}> = ({data})=>{
    const {genres,subTeams, description, id, name, views, thumbnail, slug,episodes }=data
    const router =useRouter()
    const [load, setLoad]= useState(false)
    const handleRoute=(animeId: number | string, url:string )=>{
        router.push({
            pathname: `/anime/${url}`,
            query: { id : animeId }
        })
        setLoad(true)
    }
    return(
        <div>
            
            {load ?<Loading/> : <div>
                <BreadCrumb slug='detail' name={name}/>
            <section className="anime-details">
                    <div className="container">
                        <div className={styles.anime__details__content}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className={`${styles.anime__details__pic} set-bg`}>
                                        <img src={thumbnail} alt={name}/>
                                        <div className={styles.comment}><i className="fa fa-comments"></i> 11</div>
                                        <div className={styles.view}><i className="fa fa-eye"></i> 9141</div>
                                    </div>
                                    <div className={styles.anime__details__widget}>
                                            <div className="row">
                                                <div className="col-lg-12 col-md-12">
                                                    <ul>
                                                        <li><span>Studios:</span> Lerche</li>
                                                        <li><span>Thể loại:</span> <ul className={styles.genre}>{genres.map((value:any,index:number)=> <li key={index}>{value.name}</li>)} </ul></li>
                                                        <li><span>Số tập:</span> {episodes.length} tập</li>
                                                        <li><span>Chất lượng:</span> HD</li>
                                                        <li><span>Lượt xem:</span> {views}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className={styles.anime__details__text}>
                                        <div className={styles.anime__details__title}>
                                            <h3>{name}</h3>
                                            <span>Nhóm dịch: <ul>{subTeams.map((value:string, index:number) => <li key={index}>{value}</li>)}</ul></span>
                                        </div>
                                        <div className={styles.anime__details__rating}>
                                            <div className={styles.rating}>
                                                <a><i className="fa fa-star"></i></a>
                                                <a><i className="fa fa-star"></i></a>
                                                <a><i className="fa fa-star"></i></a>
                                                <a><i className="fa fa-star"></i></a>
                                                <a><i className="fa fa-star-half-o"></i></a>
                                            </div>
                                            <span>1,000 votes</span>
                                        </div>
                                        <p>{description}</p>
                                        
                                        <div className={styles.anime__details__btn}>
                                            <span  className={styles.anime__details__btn__follow}><i className="far fa-heart"></i>  Theo dõi</span>
                                            <span  className={styles.anime__details__btn__watch} onClick={()=>handleRoute(id,slug)}><span>Xem phim</span><i className="fa fa-angle-right"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </section>
            </div>
            
            
            }
            
        </div>
    )
}