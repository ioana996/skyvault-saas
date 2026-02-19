This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## SkyVault Feature: Jump Logging Form + Dashboard (No Auth)

Allow users to log skydives and view them on a dashboard. This is the MVP for data input + display, before adding authentication.

### 1️⃣ Pages

- `/app/jump-logging/page.tsx` → Form to log a new jump
- `/app/dashboard/page.tsx` → List of logged jumps

### 2️⃣ Data Model

Simple Jump model (in-memory for MVP):

```typescript
type Jump = {
  id: string;
  dropzone: string;
  date: string; // ISO date string
  notes?: string;
};
```

- **id** – unique identifier
- **dropzone** – string (e.g., "Skydive California")
- **date** – date of jump
- **notes** – optional text for additional info

### 3️⃣ Jump Logging Form

**Requirements:**

- Fields: Dropzone, Date picker, Notes (optional textarea)
- Validation: dropzone and date required
- Submit: store jump in local React state

**Tailwind Styling:**

- Responsive form layout
- Buttons with hover/focus states
- Inputs with padding and rounded borders

### 4️⃣ Dashboard Page

**Requirements:**

- Display all logged jumps (dropzone, date, notes)
- Optional sorting by date
- Card layout per jump

**Tailwind Styling:**

- Responsive grid/list
- Cards with shadow, padding, rounded corners

### 5️⃣ Data Flow

```
JumpLoggingForm → Local React state/Context → Dashboard
```

### 6️⃣ TODO

- [ ] Create JumpLoggingForm component
- [ ] Store jumps in local state
- [ ] Create Dashboard component
- [ ] Add Tailwind styling
- [ ] Test multiple jump entries
