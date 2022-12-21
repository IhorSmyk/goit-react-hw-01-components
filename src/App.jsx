import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';

import user from './assets/user.json';
import data from './assets/data.json';
import friends from './assets/friends.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/* <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      /> */}

      {/* <Statistics title="Upload stats" stats={data} /> */}

      <FriendList friends={friends} />
    </div>
  );
};
