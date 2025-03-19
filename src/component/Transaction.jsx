export default function () {
  return (
    <li key={index} className={item.sum > 0 ? "income" : "expense"}>
      <p className="description">{item.description}</p>
      <p className="sum">{item.sum} €</p>
      <button className="delete" onClick={() => handleDelete(index)}>
        Poista
      </button>
    </li>
  );
}
