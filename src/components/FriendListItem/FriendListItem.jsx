const FriendListItem = ({ avatar, name, isOnline, id }) => {
  const backColor = isOnline ? '#00ff00' : '#ff0000';

  return (
    <li className="item" key={id}>
      <span className="status" style={{ backgroundColor: backColor }}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;
