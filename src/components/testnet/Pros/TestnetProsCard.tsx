// components/ImageBlock.tsx
import Link from 'next/link';
import styles from './TestnetPros.module.scss'; // Import the CSS module

// Define a type for the component props
interface TestnetProsCardProps {
  number: string
  title1: string
  urlLink: string
  backgroundImage: string
}

const TestnetProsCard: React.FC<TestnetProsCardProps> = ({ number, title1, urlLink, backgroundImage}) => {
  return (
    
    <div className={styles.imageBlock} style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className={styles.number}>{number}</div>
      <div className={styles.title1}>
        <Link href={urlLink}>
        {title1}
        </Link>
        
      </div>
    </div>
  );
};

export default TestnetProsCard;
