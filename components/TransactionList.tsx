'use client';
export default function TransactionList({ transactions, onDelete }: any) {
  return (
    <ul className="space-y-2">
      {transactions.map((tx: any) => (
        <li key={tx._id} className="flex justify-between border p-2 rounded">
          <span>{tx.description} - ${tx.amount}</span>
          <span>{new Date(tx.date).toLocaleDateString()}</span>
          <button onClick={() => onDelete(tx._id)} className="text-red-500">Delete</button>
        </li>
      ))}
    </ul>
  );
}