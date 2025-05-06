import prisma from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  const transactions = await prisma.transaction.findMany();
  return NextResponse.json(transactions);
}

export async function POST(req: Request) {
  const body = await req.json();
  const transaction = await prisma.transaction.create({ data: body });
  return NextResponse.json(transaction);
}