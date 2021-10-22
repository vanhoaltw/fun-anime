import axios from 'axios'
import { API_URL } from '../../constant'
import { animeItem } from '../../type'

const instanse = axios.create({
    baseURL: API_URL
})
export class animeItems{
    slug: string;
    view: number;
    name: string;
    time :string;
    latestEpisode : Array<string>;
    thumbnail: string;
    constructor(parameter:any){
        this.slug = parameter.slug || '',
        this.view = parameter.views || 0,
        this.name = parameter.name || 'No name',
        this.time = parameter.time || 0,
        this.latestEpisode = parameter.latestEpisode || 0,
        this.thumbnail = parameter.thumbnail || ''
    }
}

export default class AnimeServices{
    static async getCarousel(){
        const carousel = await instanse.get('/slide')
        if(!carousel) return []
        return carousel.data
    }
    static async getDetail(slug:string){
        const detailData = await instanse.get(`/anime/${slug}`)
        if(!detailData) return []
        return detailData.data
    }
    static async getAll(path: string){
        const data : any = await instanse.get(`/${path}`)
        if(!data) return []
        const datafinally = []
        for(let i = 0; i< data.data.data.length;i++){
            const temp = new animeItems(data.data.data[i])
            datafinally.push({...temp})
        }
        return datafinally
    }
    static async getList(slug:string, query:string){
        const data : any = await instanse.get(`/${slug}/${query}`)
        if(!data) return []
        const datafinally =[]
        for(let i =0; i< data.data.length; i++){
            const temp = new animeItems(data.data.data[i])
            datafinally.push({...temp})
        }
        return datafinally
    }

    static async getSource(animeId: number, ep: number = 0){
        const data: any = await instanse.get(`/anime/${animeId}/episodes/${ep}`)
        if(!data) return []
        return data.data
    }

}