const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <>
      <div className="profile">
        <div className="description">
          <img src={avatar} alt="User avatar" className="avatar" />
          <p className="name">{username}</p>
          <p className="tag">{tag}</p>
          <p className="location">{location}</p>
        </div>
        <ul className="stats">
          <li>
            <span className="label">{Object.keys(stats)[0]}: </span>
            <span className="quantity">{stats['followers']}</span>
          </li>
          <li>
            <span className="label">{Object.keys(stats)[1]}: </span>
            <span className="quantity">{stats['views']}</span>
          </li>
          <li>
            <span className="label">{Object.keys(stats)[2]}: </span>
            <span className="quantity">{stats['likes']}</span>
          </li>

          {/* {stats.map(stat => {
            return (
              <li>
                <span>{stat}</span>
                <span>{stats['stat']}</span>
              </li>
            );
          })} */}
        </ul>
      </div>
    </>
  );
};

export default Profile;
