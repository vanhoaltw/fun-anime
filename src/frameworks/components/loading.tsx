import { SpinnerDotted } from 'spinners-react';
import styles from '../../../styles/components/eposides.module.scss'
export const Loading = ()=>{
    return(
        <div className={styles.loading}>
            <SpinnerDotted/>
        </div>
    )
}