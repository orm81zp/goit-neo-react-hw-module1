import css from "./Avatar.module.css";

const Avatar = ({ imgUrl }) => {
  return (
    <div className={css.avatar}>
      <img src={imgUrl} alt="User avatar" />
    </div>
  );
};

export default Avatar;
