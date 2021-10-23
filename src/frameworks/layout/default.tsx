import { Header } from "../components/header"
import { createContext, useState } from "react"
import { Search } from '../components/Search'
import { Loading } from "../components/loading"
import { Footer } from "../components/Footer"

interface ContextInterface{
    setIsSearch ?: any,
    load ?: boolean,
    handleLoad ?: any
}
export const DefaultContext = createContext<ContextInterface | null>(null)
export default function DefaultLayout(props : any){
    const [load, setLoad]= useState(false)    
    const handleLoad = (status = true)=>{
        setLoad(status)
    }
    const [isSearch, setIsSearch] = useState(false)
    return(
        <div >
            {load ? <Loading/> : 
            <DefaultContext.Provider value={{setIsSearch,load,handleLoad}}>
                <Header/>
                {isSearch ? <Search/> : ''}
                <div style={{width:'100%', minHeight:'100vh'}}>
                    {props.children}
                </div>
                <Footer/>
            </DefaultContext.Provider>
            }
        </div>
    )
}