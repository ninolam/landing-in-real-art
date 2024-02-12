import styles from './AboutDescription.module.scss'
import parse from 'html-react-parser';
import useSharedLogicAboutPage from './useSharedLogicAboutPage';
import { useAppContext } from '../../context';
import { Lang } from '../../types/types';

const AboutDescription = () => {

    //Get the language of the global context
    const {lang} = useAppContext()
    const lang_ = lang as Lang
    
    const {texts, setTexts} = useSharedLogicAboutPage()

    return (
        <div className={styles.aboutContainer}>
            {parse(texts.mainDescription[lang_])}
        </div>
    )
}

export default AboutDescription