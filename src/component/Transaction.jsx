export default function Transaction({ item, handleDelete }) {
  return (
    <li
      key={item.sum + item.name}
      className={item.sum > 0 ? "income" : "expense"}
    >
      <p className="description">{item.description}</p>
      <p className="sum">{item.sum} €</p>
      <button
        className="delete"
        onClick={() => handleDelete(item.description, item.sum)}
      >
        Poista
      </button>
    </li>
  );
}
