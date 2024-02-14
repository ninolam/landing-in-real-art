// components/ImageBlock.tsx
import styles from './Invest.module.scss'; // Import the CSS module

const CheckBoxChecked = () => {
  return (
   <svg
           className={styles["frame-3387__group-36601"]}
           width="22"
           height="22"
           viewBox="0 0 22 22"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
         >
           <circle cx="11" cy="11" r="11" fill="#E4EBF5" />
           <path
             d="M7 11L10 14L16 8"
             stroke="#1751F0"
             strokeWidth="2"
             strokeLinecap="round"
             strokeLinejoin="round"
           />
         </svg>
  )
 }
 
// Define a type for the component props
interface InvestCardProps {
  number: string; 
  title1: string;
  title2: string;
  backgroundImage: string;
  details: string;
  details1?: string[];
  details2?: string[];
  listItems?: string[];
}

const InvestCard: React.FC<InvestCardProps> = ({ number, title1, title2, backgroundImage, details, details1, details2, listItems }) => {
  return (
    
    <div className={styles.imageBlock} style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className={styles.number}>{number}</div>
      <div className={styles.title1}>{title1}</div>
      <div className={styles.title2}>{title2}</div>
      <div className={styles.content}>
        {/*<div className={styles.textContent}>{details}</div> */}
        <div className={styles.details1}>
            {details1?.map((item, index) => (
              <div key={index} className={styles.details1Item}>
                <CheckBoxChecked key={index}/>&nbsp;&nbsp;{item}
              </div>
            ))}          
        </div> 
        <div className={styles.details2}>
            {details2?.map((item, index) => (
              <div key={index}>
                <CheckBoxChecked key={index}/>&nbsp;&nbsp;{item}
              </div>
            ))}          
        </div> 
      </div>
    </div>
  );
};

export default InvestCard;
