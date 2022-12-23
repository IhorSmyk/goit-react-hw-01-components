import user from './assets/user.json';
import data from './assets/data.json';
import friends from './assets/friends.json';
import transactions from './assets/transactions.json';

import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      {/* <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      /> */}
      {/* <Statistics title="Upload stats" stats={data} /> */}
      {/* <FriendList friends={friends} /> */}
      {/* <TransactionHistory items={transactions} />; */}
    </div>
  );
};
