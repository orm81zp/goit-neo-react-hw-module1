import css from "./Card.module.css";

const Card = ({ name, tag, location }) => {
  return (
    <div className={css.card}>
      <p className={css.cardname}>{name}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </div>
  );
};

export default Card;
