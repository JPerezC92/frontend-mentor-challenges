import CardImage from './CardImage';
import Stats from './Stats';
import StatsContainer from './StatsContainer';
import styles from './StatsPreviewCard.module.scss';

const StatsPreviewCard: React.FC = () => {
  return (
    <>
      <main className={styles.statsPreviewCard_wrapper}>
        <div className={styles.statsPreviewCard}>
          <CardImage src="/challenges/stats-preview-card-component/image-header-mobile.jpg" />

          <div className={styles.card__content}>
            <h1 className={styles.card__title}>
              Get <span className={styles.accent}>insights</span> that help your
              business grow.
            </h1>

            <p className={styles.card__paragraph}>
              Discover the benefits of data analytics and make better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>

            <StatsContainer>
              <Stats head="10k+" description="Companies" />
              <Stats head="314" description="Templates" />
              <Stats head="12M+" description="Queries" />
            </StatsContainer>
          </div>
        </div>
      </main>
    </>
  );
};

export default StatsPreviewCard;
