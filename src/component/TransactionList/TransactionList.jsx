import './TransactionList.css'
export default function TransactionList({list}){
    return (
        <ul id="transaction-list">
            <h3>Transactions</h3>
            {list.map(item => {
                <li>
                    <p className="description">${item.description}</p>
                    <p className="sum">${item.sum}</p>
                    <button class="delete">Poista</button>
                </li>
            })}
        </ul>
    );
}