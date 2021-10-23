import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { detailType } from "../../../type"
import { DetailAnime } from "../../frameworks/components/detail"
import DefaultLayout from "../../frameworks/layout/default"
import AnimeServices from "../../services/getAnime"

const Detail:React.FC<{animeDetail: detailType}> = ({animeDetail}) => {
    const [data, setData]:any = useState()
    useEffect(()=>{
        setData(<DetailAnime data={animeDetail}/>)
    },[animeDetail])
    return (
        <DefaultLayout>
            {data}
        </DefaultLayout>
    )
}
export async function getServerSideProps(context :any){
    const {query:{slug}}=context
    const dataDetail :any = await AnimeServices.getDetail(slug)
    return{
        props:{
            animeDetail : dataDetail.data
        }
    }
}
export default Detail
