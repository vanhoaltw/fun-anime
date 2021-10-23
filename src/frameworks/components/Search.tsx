import { useContext, useRef, useState } from 'react'
import styles from '../../../styles/components/search.module.scss'
import AnimeServices from '../../services/getAnime'
import { DefaultContext } from '../layout/default'
import {AnimeItem} from './AnimeItems'
import { Loading } from './loading'

interface searchType{
    q:string,
    limit:number,
    page :number
}
export const Search=()=>{
    const [listResult,setListResult]:any = useState(null)
    const [searching, setSearching] = useState(false)
    const {setIsSearch} = useContext(DefaultContext)
    const [keyWord, setKeyWord] = useState("")
    const typingRef : any = useRef(null)
    const reFetchData = async(key:searchType)=>{
        const listSearch: any = await AnimeServices.search(key) 
        if(listSearch.data == 0 ){
            setListResult(<h3> Từ khóa bạn tìm không có kết quả! </h3>)
        }else{
            setListResult(listSearch.data.map((value:any,index:number) => (
                <AnimeItem dataItem={value} key={index}/>
            )))
        }
        setSearching(false)
    }
    const handleSearch=(e:any)=>{
        setKeyWord(e.target.value)
        if(typingRef.current){
            clearTimeout(typingRef.current)
        }        
        typingRef.current = setTimeout(()=>{
            setSearching(true)
            reFetchData({q : e.target.value, limit : 10, page : 1})
        },1500)
    }
    return(
        <div className={styles.search__model}>
            <div className="h-100 d-flex flex-column align-items-center justify-content-start">
                <div className={styles.search__model__close} onClick={()=>setIsSearch(false)}><i className="fas fa-times"></i></div>
                    <input 
                        type="text" 
                        id="search-input" 
                        placeholder="Search here....." 
                        value={keyWord}
                        onChange={handleSearch} 
                        autoComplete = 'false' 
                        className={styles.search__model__form}  
                    />
                <div className={styles.search__model__result}>
                    {searching ? <Loading/> : listResult}
                </div>
            </div>
        </div>
    )
}