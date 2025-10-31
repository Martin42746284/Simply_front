# Simply backend

Minimal Express + Prisma backend for the Simply frontend.

Quick start (from `backend/`):

1. npm install
2. npm run prisma:generate
3. (optional) npx prisma migrate dev --name init
4. npm run dev

Environment variables are read from `.env` (DATABASE_URL, JWT_SECRET, PORT).
