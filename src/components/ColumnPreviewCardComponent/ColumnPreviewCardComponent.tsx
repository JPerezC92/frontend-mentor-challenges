import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import Image from 'next/image';
import sedans from './images/icon-sedans.svg';
import suvs from './images/icon-suvs.svg';
import luxury from './images/icon-luxury.svg';
import styles from './ColumnPreviewCardComponent.module.scss';

const Card: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, className, ...rest }) => {
  return (
    <div className={`${styles.card} ${className}`} {...rest}>
      {children}
    </div>
  );
};

const Logo: FC<{ img: any; alt: string }> = ({ img, alt, ...rest }) => {
  return (
    <div {...rest}>
      <Image src={img} alt={alt} />
    </div>
  );
};

const ColumnPreviewCardComponent: FC = () => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.card__grid}>
        <Card className={styles.background_v1}>
          <Logo img={sedans} alt="sedans car icon" />

          <h2 className={styles.card__title}>Sedans</h2>

          <div className={styles.card__content}>
            <p className={styles.card__paragraph}>
              Choose a sedan for its affordability and excellent fuel economy.
              Ideal for cruising in the city or on your next road trip.
            </p>
            <button className={styles.card__button} type="button">
              Learn More
            </button>
          </div>
        </Card>

        <Card className={styles.background_v2}>
          <Logo img={suvs} alt="suvs car icon" />
          <h2 className={styles.card__title}>SUVs</h2>

          <div className={styles.card__content}>
            <p className={styles.card__paragraph}>
              Take an SUV for its spacious interior, power, and versatility.
              Perfect for your next family vacation and off-road adventures.
            </p>
            <button className={styles.card__button} type="button">
              Learn More
            </button>
          </div>
        </Card>

        <Card className={styles.background_v3}>
          <Logo img={luxury} alt="luxury car icon" />
          <h2 className={styles.card__title}>Luxury</h2>

          <div className={styles.card__content}>
            <p className={styles.card__paragraph}>
              Cruise in the best car brands without the bloated prices. Enjoy
              the enhanced comfort of a luxury rental and arrive in style.
            </p>

            <button className={styles.card__button} type="button">
              Learn More
            </button>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default ColumnPreviewCardComponent;
