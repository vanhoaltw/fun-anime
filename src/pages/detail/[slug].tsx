import { detailType } from "../../../type"
import { DetailAnime } from "../../frameworks/components/detail"
import DefaultLayout from "../../frameworks/layout/default"
import AnimeServices from "../../services/getAnime"

const Detail:React.FC<{animeDetail: detailType}> = ({animeDetail}) => {
    return (
        <DefaultLayout>
            <DetailAnime data={animeDetail} />
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
