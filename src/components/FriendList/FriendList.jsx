import css from "./FriendList.module.css";

import FriendListItem from "./components/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <div className="container">
      <div className={css.friends}>
        <ul className={css.friendsList}>
          {friends.map(({ id, avatar, name, isOnline }) => {
            return (
              <li key={id}>
                <FriendListItem
                  avatar={avatar}
                  name={name}
                  isOnline={isOnline}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FriendList;
