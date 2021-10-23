import { useContext, useEffect, useState } from "react"
import { AnimeItem } from "../../frameworks/components/AnimeItems"
import { Loading } from "../../frameworks/components/loading"
import { Pagination } from "../../frameworks/components/Pagination"
import DefaultLayout from "../../frameworks/layout/default"
import AnimeServices from "../../services/getAnime"
import { GENRES, RANKINGS } from "../../../constant"
import { BreadCrumb } from "../../frameworks/components/detail/Breadcrumb"

const SearchById:React.FC<{listAnime:any, name:string, pagination:any,categories : string}>= ({listAnime,name,pagination,categories})=>{
    const [loading, setLoading] = useState(false)    
    const [title,setTtile] = useState(() =>{
        let tag = categories == 'ranking' ? RANKINGS : GENRES
        for(let i =0 ; i < tag.length ; i++){
            if(tag[i].slug == name) return tag[i].name
        }
        return ''
    })
    useEffect(()=>{
        setLoading(false)
    },[pagination.currentPage])
    return(
        <DefaultLayout>
            <BreadCrumb slug={categories} name={title}/>
                {loading ? <Loading/> : 
                    <section className="product-page spad">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="product__page__content">
                                        <div className="product__page__title">
                                            <div className="row">
                                                <div className="col-lg-8 col-md-8 col-sm-6">
                                                    <div className="section-title">                                                        
                                                        <h4>{title}</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-start align-item-start flex-wrap">                                    
                                            {listAnime.map((value:any,index:number) =>(
                                                <AnimeItem dataItem={value} key={index}/>
                                            ))}
                                        </div>
                                    </div>
                                    {pagination ? <Pagination listPage={pagination} func={setLoading}/> : ''}
                                    
                                </div>
                            </div>
                        </div>
                    </section>                            
                }
        </DefaultLayout>
    )
}
export async function getServerSideProps(context:any){
    const {query:{categories, slug,page}} = context
    const data : any = await AnimeServices.getCate(categories,slug,page || 1)
    console.log('query', slug)
    return{
        props:{
            listAnime : data.data,
            name : slug,
            categories: categories,
            pagination: data.pagination ? data.pagination : ''
        }
    }
}

export default SearchById