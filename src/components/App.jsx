import user from "../../src/data/user.json";
import Profile from "./Profile/Profile"
import Statistics from "./Statistics/Statistics";
// import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import data from '../../src/data/data.json';
import friends from "../../src/data/friends.json";
import items from "../../src/data/transactions.json";

export const App = () => {
  return (
    <>
    <Profile user={user} />
    <Statistics data={data} />
    {/* <FriendList friends={friends} /> */}
    <TransactionHistory items={items} />
    </>
      
  )
};