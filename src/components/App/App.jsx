import FriendList from "../FriendList/FriendList";
import Profile from "../Profile/Profile";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

import friends from "../../data/friends.json";
import transactions from "../../data/transactions.json";
import user from "../../data/user.json";

const App = () => {
  const { username, avatar, location, tag, stats } = user;
  return (
    <>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
