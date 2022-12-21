
const FriendList = ({ users }) => {
  return (
    <ul>
      {users.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id} className="item">
            <span className="status"></span>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
