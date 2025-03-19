export default function Transaction({ index, item, handleDelete }) {
  return (
    <li key={index} className={item.sum > 0 ? "income" : "expense"}>
      <p className="description">{item.description}</p>
      <p className="sum">{item.sum} €</p>
      <button className="delete" onClick={() => handleDelete(index, item.sum)}>
        Poista
      </button>
    </li>
  );
}
