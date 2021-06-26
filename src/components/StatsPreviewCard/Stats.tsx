import styles from './StatsPreviewCard.module.scss'

const Stats: React.FC<{
  head: string
  description: string
}> = ({ head, description }) => (
  <li>
    <div className={styles.stat__headline}>{head}</div>
    <div className={styles.stat__description}>{description}</div>
  </li>
)

export default Stats
