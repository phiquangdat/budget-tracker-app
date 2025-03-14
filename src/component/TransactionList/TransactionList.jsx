import "./TransactionList.css";

export default function TransactionList({ list, setList }) {
  function handleDelete(e) {
    const updatedList = list.filter((_, index) => {
      return index !== e;
    });
    setList(updatedList);
  }

  return (
    <div>
      <h3>Transactions</h3>
      <ul id="transaction-list">
        {list.map((item, index) => (
          <li key={index} className={item.sum > 0 ? "income" : "expense"}>
            <p className="description">{item.description}</p>
            <p className="sum">{item.sum} €</p>
            <button className="delete" onClick={() => handleDelete(index)}>
              Poista
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
