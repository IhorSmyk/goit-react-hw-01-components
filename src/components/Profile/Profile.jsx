import PropTypes from 'prop-types';
import s from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={s.profile}>
      <div className="description">
        <img src={avatar} alt="User avatar" className={s.avatar} />
        <p className={s.name}>{username}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>
      <ul className={s.stats}>
        <li className={s.item}>
          <span className={s.label}>
            {Object.keys(stats)[0]}:<br />
          </span>
          <span className={s.quantity}>{stats['followers']}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>
            {Object.keys(stats)[1]}:<br />
          </span>
          <span className={s.quantity}>{stats['views']}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>
            {Object.keys(stats)[2]}:<br />
          </span>
          <span className={s.quantity}>{stats['likes']}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
