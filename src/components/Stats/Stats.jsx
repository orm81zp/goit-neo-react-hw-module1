import css from "./Stats.module.css";

const Stats = ({ stats }) => {
  return (
    <ul className={css.statslist}>
      {Object.entries(stats).map(([name, value]) => (
        <li key={name} className={css.statslistItem}>
          <h3 className={css.name}>{name}</h3>
          <span className={css.value}>{value}</span>
        </li>
      ))}
    </ul>
  );
};

export default Stats;
