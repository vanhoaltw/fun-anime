import { useRouter } from "next/router"
import router from "next/router"
import { useState, useEffect, Key } from "react"
import styles from './pagination.module.scss'

interface pages {
    currentPage:number,
    totalPage: number
}

export const Pagination:React.FC<{listPage:pages, func:any}> = ({listPage,func})=>{
    const [pageList, setPageList] : any = useState([])
    let {totalPage, currentPage} = listPage
    // Algothrim return page number
    function checkPage(current : any, lastPage:number){
        let delta= 2
        const left = current - delta
        const right = Number(current) + delta + 1
        let range =[],
            rangeWithDots : any[] = []
        let compare : any = null;
        for(let i = 1; i<= lastPage; i++){
            if(i === 1 || i === lastPage || i>left && i< right){
                range.push(i)
            } 
        }
        range.forEach((value)=>{
            if(compare){
                if(value-compare ===2){
                    rangeWithDots.push(compare + 1);
                }else if( value - compare !== 1){
                    rangeWithDots.push('...')
                }
            }
            rangeWithDots.push(value)
            compare=value;
            }
        )
        setPageList(rangeWithDots)
    }
    //---------x----------
    useEffect(() => {
        checkPage(currentPage,totalPage)
    }, [currentPage, totalPage])
    
    const handleRoute=(number : number)=>{
        router.push({
            pathname: router.pathname,
            query:{...router.query, page : number}
        })
        func(true)
    }
    const renderPagination = pageList.map((value: number,index: Key | null | undefined)=>(
        <button className={`${styles.pagination_item} ${currentPage == value ? styles.active : ''}` }  key={index} onClick={()=> handleRoute(value)} disabled={!Number.isInteger(value)}>
            {value}
        </button>
    ))        
    return(
        <div className={styles.pagination_wrap} >
            <button className={`${styles.pagination_item}`}  disabled={currentPage == 1} onClick={()=> handleRoute(currentPage - 1)}><i className="fa-solid fa-caret-left"></i></button>
                {renderPagination}
            <button className={`${styles.pagination_item}`}  disabled={currentPage == totalPage} onClick={()=> handleRoute(currentPage + 1)}><i className="fa-solid fa-caret-right"></i></button>
        </div>
    )
}