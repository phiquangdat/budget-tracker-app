import { useState } from "react";
export default function TransactionForm({list, setList}){
    const [description, setDescription] = useState("");
    const [sum, setSum] = useState("");
    function handleSubmit(e){
        e.preventDefault();
        const data = {
            description: description,
            sum: sum
        }
        setList(prevData => [...prevData, data]);
        console.log(list);
    }
    return (
        
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" name="description" value={description} placeholder="Example: S-market" required onChange={(curr) => {
                setDescription(curr.target.value);
            }}/>
            <label htmlFor="sum">Sum:</label>
            <input type="text" id="sum" name="sum" placeholder="Example: -50 or +100" value={sum} required onChange={(curr) => {
                setSum(curr.target.value);
            }}/>
            <button type="submit" id="addTransaction">Add Transaction</button>
        </form> 
        </>
    );
}