import Image from 'next/image';
import styles from './StatsPreviewCard.module.scss';

const CardImage: React.FC<{ src: string }> = ({ src }) => {
  return (
    <div className={styles.card__image}>
      <Image
        src={src}
        width="0"
        height="0"
        layout="responsive"
        alt="working on the office"
      />
    </div>
  );
};

export default CardImage;
