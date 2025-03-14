import "./TransactionList.css";
export default function TransactionList({ list }) {
  return (
    <div>
      <h3>Transactions</h3>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item.description}: {item.sum}
          </li>
        ))}
      </ul>
    </div>
  );
}
