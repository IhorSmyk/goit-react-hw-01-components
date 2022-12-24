import s from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const isOnlineBackground = isOnline ? 'online' : 'offline';
  const isOnlineMark = isOnline ? 'onlineStatus' : 'offlineStatus';
  return (
    <li className={s.item + ' ' + s[isOnlineBackground]}>
      <span className={s[isOnlineMark]}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
