# Personal Finance Visualizer (Stage 1 with PostgreSQL)

## Features
- Add/Delete Transactions
- Monthly Expenses Chart
- Responsive UI with shadcn/ui
- PostgreSQL with Prisma

## Setup

1. Set your PostgreSQL `DATABASE_URL` in `.env.local`
2. Run `npm install`
3. Run `npx prisma generate && npx prisma migrate dev --name init`
4. Start with `npm run dev`