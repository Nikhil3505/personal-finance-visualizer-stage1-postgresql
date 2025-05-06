import prisma from '@/lib/db';
import { NextResponse } from 'next/server';

export async function DELETE(_: any, { params }: any) {
  await prisma.transaction.delete({ where: { id: parseInt(params.id) } });
  return NextResponse.json({ message: 'Deleted' });
}