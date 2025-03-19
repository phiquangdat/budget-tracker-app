import "./TransactionList.css";
import Transaction from "../Transaction";
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
          <Transaction index={index} item={item} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}
