import { useState } from 'react'
import { useQuery } from 'react-query'
import AnimeServices from '../../../services/getAnime'
import styles from './listAnime.module.scss'
import { AnimeItem } from '../AnimeItems'
import { SpinnerDotted } from 'spinners-react';
import { Loading } from '../loading'
export const ListAnime:React.FC<{title:string, url:string}> =({title,url})=>{
    const [isLoading, setIsLoading]= useState(true)
    const {data,status} = useQuery(title, async()=> await AnimeServices.getAll(url))
    let width = 0 
    if(data) width = data.length > 9 ? 9 : data.length
    return(
            
                    <div className={styles.list__product}>
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-8">
                                <div className="section-title">
                                    <h4>{title}</h4>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4">
                                <div className={styles.btn__all}>
                                    <a href="#" className="primary-btn">Xem hết  <i className="fas fa-chevron-right"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                data ? data.slice(0,width).map((value,index)=>(
                                    <AnimeItem dataItem={value} key={index}/>                              
                                )) : <Loading/>
                            }
                        </div>
                    </div>
    )
}