import css from "./Profile.module.css";

import Avatar from "../Avatar/Avatar";
import Card from "../Card/Card";
import Stats from "../Stats/Stats";

const Profile = ({ image, name, tag, location, stats }) => {
  return (
    <div className="container">
      <div className={css.profile}>
        <div className={css.profileHeader}>
          <Avatar imgUrl={image} />
          <Card name={name} tag={tag} location={location} />
        </div>
        <Stats stats={stats} />
      </div>
    </div>
  );
};

export default Profile;
