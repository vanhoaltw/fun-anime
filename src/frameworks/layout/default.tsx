import { Header } from "../components/header"

export default function DefaultLayout(props : any){
    return(
        <div >
            <Header/>
            <div style={{width:'100%', height:'100vh'}}>
                {props.children}
            </div>
        </div>
    )
}