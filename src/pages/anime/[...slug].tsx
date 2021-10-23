/* eslint-disable @next/next/no-img-element */
import DefaultLayout from "../../frameworks/layout/default"
import AnimeServices from "../../services/getAnime"
import styles from './watch.module.scss'
import ReactPlayer from 'react-player'
import { useState,useEffect } from "react"
import { Eposides } from "../../frameworks/components/eposides"
import { useQuery } from "react-query"
import { BreadCrumb } from "../../frameworks/components/detail/Breadcrumb"
import { Loading } from "../../frameworks/components/loading"

const WatchAnime:React.FC<{dataSource: any, listEp: any[]}> = ({dataSource,listEp})=>{  
    const formartSource = (source: string)=>{
        return source.split(" ")[0]
    }
    const [load, setLoad]= useState(false)
    const handleLoad = ()=>{
        setLoad(true)
    }
    useEffect(() => {
        setLoad(false)
    }, [dataSource])
    const {full_name , film_name, id, name , slug, thumbnail_medium, videoSource, views, link } = dataSource
    return(
        <DefaultLayout>
            <BreadCrumb slug="Anime" name={film_name} ep={full_name}/>
            {dataSource ? 
            <div>
                <div className="container">                    
                    <div className="row">
                        <div className="col-lg-12">
                        {load ? <Loading/> :
                            <ReactPlayer url={`${formartSource(videoSource)}`}
                                controls
                                playing
                                className={styles.anime_video}
                            />                               
                        }
                        <div>
                            <Eposides listEp={listEp} wallaper={thumbnail_medium} ep={name} func={handleLoad}/>                            
                        </div>                     
                        </div>
                    </div>                    
                </div>
            </div>
            : "Hiện tại phim chưa được cập nhật"}
        </DefaultLayout>
    )
}
export async function getServerSideProps(context: any){
    const {query } = context
    const dataSource : any = await AnimeServices.getSource(query.id,Number(query?.ep)-1 | 0)    
    const dataDetail : any = await AnimeServices.getDetail(query.slug)

    return{
        props : {
            dataSource: dataSource.data,
            listEp: dataDetail.data
        }
    }

}   


export default WatchAnime

