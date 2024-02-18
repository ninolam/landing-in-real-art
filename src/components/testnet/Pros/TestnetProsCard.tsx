// components/ImageBlock.tsx
import styles from './TestnetPros.module.scss'; // Import the CSS module

// Define a type for the component props
interface TestnetProsCardProps {
  number: string; 
  title1: string;
  backgroundImage: string;
}

const TestnetProsCard: React.FC<TestnetProsCardProps> = ({ number, title1, backgroundImage}) => {
  return (
    
    <div className={styles.imageBlock} style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className={styles.number}>{number}</div>
      <div className={styles.title1}>{title1}</div>
    </div>
  );
};

export default TestnetProsCard;
