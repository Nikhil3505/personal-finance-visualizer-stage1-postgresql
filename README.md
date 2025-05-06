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


# 💰 Personal Finance Visualizer

A simple, full-stack web application that allows users to track their personal expenses, categorize spending, and set monthly budgets — built in stages to demonstrate progressive enhancements.

---

## 📁 Project Repositories

This project is divided into **three separate repositories** to show progressive development:

- 🔹 STAGE 1 Link: [https://github.com/Nikhil3505/personal-finance-visualizer-stage1-postgresql.git] 💥
- 🔹 STAGE 2 Link: [https://github.com/Nikhil3505/personal-finance-visualizer-stage2-postgresql.git] 💥
- 🔹 STAGE 3 Link: [] 💥

Each stage builds upon the previous one with new features and UI improvements.

---

## 📌 Project Purpose

> The aim is to help individuals visualize and understand their spending behavior, stay on budget, and make informed financial decisions.

Key goals:
- Track daily transactions
- Categorize spending
- Set and compare monthly budgets
- View insights using charts

---

## 🧱 Tech Stack

| Layer        | Technology         |
|--------------|--------------------|
| Frontend     | Next.js, React, shadcn/ui, Tailwind CSS |
| Backend      | Express.js (Node.js) |
| Database     | PostgreSQL          |
| Charts       | Recharts            |

---

## 🚦 Stage 1 – Basic Transaction Tracking

✅ Repository: `personal-finance-visualizer-stage-1`

### Features Added:
- ➕ Add / ✏️ Edit / ❌ Delete transactions
- 📄 View transaction list
- 📊 Monthly expenses **bar chart**
- ✅ Basic form validations

### Backend:
- REST API endpoints for transaction CRUD
- PostgreSQL integration

---

## 📊 Stage 2 – Categories

✅ Repository: `personal-finance-visualizer-stage-2`

### Features Added (over Stage 1):
- 🏷️ Predefined transaction categories (Food, Travel, Rent, etc.)
- 🥧 Pie chart for **category-wise** expense breakdown
- 📋 Dashboard showing:
  - Total monthly expenses
  - Category-wise breakdown
  - Recent transactions

### Improvements:
- Component-level refactoring
- Optimized database schema with category table

---

## 💡 Stage 3 – Budgeting

✅ Repository: `personal-finance-visualizer-stage-3`

### Features Added (over Stage 2):
- 💸 Monthly budget input per category
- 📊 Budget vs Actual comparison chart
- 📈 Simple spending insights (over/under budget per category)

---

## 🧪 Installation & Setup (For All Stages)

### 🔧 Prerequisites

- Node.js (v16+)
- PostgreSQL (v13+)
- Git

---

### 1️⃣ Backend Setup

```bash
cd backend
npm install
Create .env:

env
Copy
Edit
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_pg_user
DB_PASSWORD=your_pg_password
DB_NAME=finance_db
Create database manually:

sql
Copy
Edit
CREATE DATABASE finance_db;
Start backend server:

bash
Copy
Edit
node server.js
Runs on: http://localhost:3001

2️⃣ Frontend Setup
bash
Copy
Edit
cd frontend
npm install
Create .env.local:

env
Copy
Edit
NEXT_PUBLIC_API_URL=http://localhost:3001
Run frontend:

bash
Copy
Edit
npm run dev
Runs on: http://localhost:3000

🌍 Live Demo & Deployment (Optional)
You can deploy using:

Part	Platform
Frontend	Vercel / Netlify
Backend	Render / Railway
Database	Supabase / Neon

❌ No Authentication
As per problem guidelines, login/signup is not implemented.

📷 Screenshots (Optional)
Add GIFs/screens of dashboard, charts, and forms from each stage.

📝 Evaluation Criteria
Criteria	Weight
Feature Implementation	40%
Code Quality	30%
UI/UX Design	30%

📜 License
Licensed under the MIT License.

👏 Final Thoughts
This project shows step-by-step growth from a simple tracker to a fully functional budgeting app. Each stage is isolated in its own repository, making it easy to explore specific feature implementations.

Happy budgeting! 💸
