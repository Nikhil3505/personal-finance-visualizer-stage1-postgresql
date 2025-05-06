'use client';
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TransactionForm({ onSubmit }: any) {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!amount || !date || !description) {
      setError("All fields are required");
      return;
    }
    setError('');
    onSubmit({ amount: parseFloat(amount), date, description });
    setAmount('');
    setDate('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input type="number" placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
      <Input type="date" value={date} onChange={e => setDate(e.target.value)} />
      <Input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button type="submit">Add Transaction</Button>
    </form>
  );
}