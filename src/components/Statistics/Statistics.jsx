import s from './Statistics.module.css';
import getRandomColor from 'utils/getRandomColor';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <section className={s.statistics + ' box'}>
      {title ? <h2 className={s.title}>{title.toUpperCase()}</h2> : null}
      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              style={{ backgroundColor: getRandomColor() }}
              className={s.item}
              key={id}
            >
              <span className={s.label}>
                {label}
                <br />
              </span>
              <span className={s.percentage}>{percentage} %</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default Statistics;
