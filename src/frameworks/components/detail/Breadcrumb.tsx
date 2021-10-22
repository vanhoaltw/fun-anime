import styles from './detail.module.scss'
import Link from 'next/link'


export const BreadCrumb:React.FC<{slug:string, name:string, ep?:string|number}> =(props)=>{
    return(
        <div className={styles.breadcrumb_option}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className={styles.breadcrumb__links}>
                            <Link href='/'> 
                                <a><i className="fa fa-home"></i>Trang chủ</a>                            
                            </Link>
                            <a>{props.slug}</a>
                            <a>{props.name}</a>
                            {props.ep ? <a>{props.ep}</a> : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}