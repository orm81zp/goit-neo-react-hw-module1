import css from "./FriendList.module.css";

import FriendListItem from "./components/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <div className="container">
      <div className={css.friends}>
        <ul className={css.friendsList}>
          {friends.map(({ avatar, name, isOnline }) => {
            return (
              <li key={name}>
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
