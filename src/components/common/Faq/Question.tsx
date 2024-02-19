import { useState } from 'react';
import styles from './Faq.module.scss'

interface QuestionProps {
    question: string;
    answer: string;
    imagePlusRef: React.RefObject<HTMLImageElement>;
  }

  const useQuestionVisibility = (initialVisibility: boolean, plusImageSrc: string, minusImageSrc: string) => {
    const [isVisible, setIsVisible] = useState<boolean>(initialVisibility)
    const [imageSrc, setImageSrc] = useState<string>(plusImageSrc)
  
    const toggleVisibility = () => {
      setIsVisible(!isVisible)
      setImageSrc(isVisible ? plusImageSrc : minusImageSrc)
    }
  
    return { isVisible, imageSrc, toggleVisibility }
  }

const Question: React.FC<QuestionProps> = ({ question, answer, imagePlusRef }) => {
    const { isVisible, imageSrc, toggleVisibility } = useQuestionVisibility(false, "/img/plus_16px.png", "/img/minus_16px.png")
    
    return (
            <>
                <div className={styles.questionBlock}>
                <div className={styles.question}>
                    {question}
                </div>
                <div onClick={toggleVisibility}>
                    <img ref={imagePlusRef} className={styles.plus} alt="plus" src={imageSrc} />
                </div>
                </div>
                {isVisible && (
                    <div className={styles.answer}>
                    {answer}
                    </div>
                )}
            </>  
            
    
    )
}

export default Question