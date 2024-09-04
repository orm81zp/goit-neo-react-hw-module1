// import "./TransactionHistory.css";
import css from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <div className="container">
      <div className={css.transactions}>
        <table className={css.table}>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody>
            {items.map(({ id, type, amount, currency }) => (
              <tr key={id}>
                <td className={css.tdType}>{type}</td>
                <td className={css.tdAmount}>{amount}</td>
                <td className={css.tdCurrency}>{currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;
