import styles from './StatsPreviewCard.module.scss'

const StatsContainer: React.FC = ({ children }) => (
  <ul className={styles.stats}>{children}</ul>
)

export default StatsContainer
