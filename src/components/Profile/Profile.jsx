import PropTypes from 'prop-types';
import s from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="stats">
        <li className="item">
          <span className="label">{Object.keys(stats)[0]}: </span>
          <span className="quantity">{stats['followers']}</span>
        </li>
        <li className="item">
          <span className="label">{Object.keys(stats)[1]}: </span>
          <span className="quantity">{stats['views']}</span>
        </li>
        <li className="item">
          <span className="label">{Object.keys(stats)[2]}: </span>
          <span className="quantity">{stats['likes']}</span>
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
