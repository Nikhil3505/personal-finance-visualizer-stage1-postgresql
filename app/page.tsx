'use client';
import { useEffect, useState } from 'react';
import TransactionForm from '@/components/TransactionForm';
import TransactionList from '@/components/TransactionList';
import ExpensesChart from '@/components/ExpensesChart';

export default function HomePage() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch('/api/transactions')
      .then(res => res.json())
      .then(data => setTransactions(data));
  }, []);

  const handleAdd = async (tx: any) => {
    const res = await fetch('/api/transactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tx),
    });
    const newTx = await res.json();
    setTransactions([...transactions, newTx]);
  };

  const handleDelete = async (id: string) => {
    await fetch(`/api/transactions/${id}`, { method: 'DELETE' });
    setTransactions(transactions.filter(tx => tx._id !== id));
  };

  const chartData = transactions.reduce((acc: any, tx: any) => {
    const month = new Date(tx.date).toLocaleString('default', { month: 'short' });
    const found = acc.find((item: any) => item.month === month);
    if (found) found.amount += tx.amount;
    else acc.push({ month, amount: tx.amount });
    return acc;
  }, []);

  return (
    <main className="p-4 max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Personal Finance Tracker</h1>
      <TransactionForm onSubmit={handleAdd} />
      <ExpensesChart data={chartData} />
      <TransactionList transactions={transactions} onDelete={handleDelete} />
    </main>
  );
}