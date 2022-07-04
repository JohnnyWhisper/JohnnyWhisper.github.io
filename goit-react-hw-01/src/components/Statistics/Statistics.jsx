import data from '../data.json';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = () => {
    return (
<section className={styles.statistics}>
  <h2 className={styles.title}>UPLOAD STATS</h2>

  <ul className={styles.statList}>
      {data.map (datum => (
        <li key={datum.id} className={styles.item}>
            <span className={styles.label}>{datum.label}</span>
            <span className={styles.percentage}>{datum.percentage}%</span>
        </li>
      ))}
   
  </ul>
</section>
);
    };


    Statistics.propTypes = {
      title: PropTypes.string,
      stats: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          label: PropTypes.string,
          percentage: PropTypes.number,
        }),
      ),
    };
    

export default Statistics;