import { TosContentProps } from '../../types/types'
import styles from './TosContent.module.scss'
import parse from 'html-react-parser'

const TosContent = ({mainContent, ...props}: TosContentProps) => { 

    return (
        <div className={styles.tosContainer}>
            {parse(mainContent)}
        </div>
    )
}

export default TosContent