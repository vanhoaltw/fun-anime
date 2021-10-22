export interface carouselType {
    thumbnail: string,
    slug:string,
    name:string,
    view ?: string
}

export interface animeItem{
    slug: string,
    view: number,
    name: string,
    limit ?:string,
    eposides ?: Array<string>,
    thumbnail: string
}

export interface detailType{
    genres: any[],
    subTeams:any[],
    description: string | number,
    id:number,
    name : string,
    views : number | 0,
    thumbnail : string,
    slug:string,
    episodes : any[],
}