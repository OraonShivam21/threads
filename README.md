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

## Folder Structure
/threads
├── /app                    # The main routing directory
│   ├── favicon.ico
│   ├── globals.css         # Tailwind imports
│   ├── (auth)              # Route Group: Auth pages (different layout)
│   │   ├── layout.tsx      # Layout specifically for login/signup (centered box)
│   │   ├── sign-in
│   │   │   └── page.tsx
│   │   └── sign-up
│   │       └── page.tsx
│   ├── (root)              # Route Group: Main App (Navbar + Sidebar layout)
│   │   ├── layout.tsx      # Main layout with Header/Footer
│   │   ├── page.tsx        # The Home Feed
│   │   ├── create-thread
│   │   │   └── page.tsx
│   │   └── profile
│   │       └── [id]        # Dynamic Route for user profiles
│   │           └── page.tsx
│   └── api                 # (Optional) API routes (use Server Actions instead!)
│       └── uploadthing     # Route for UploadThing webhook
│           └── route.ts
├── /components             # React Components
│   ├── /forms              # Complex forms (React Hook Form + Zod)
│   │   ├── AccountProfile.tsx
│   │   └── PostThread.tsx
│   ├── /cards              # UI Cards
│   │   ├── ThreadCard.tsx
│   │   └── UserCard.tsx
│   └── /shared             # Reusable UI (Navbar, Sidebar, Loader)
│       ├── Topbar.tsx
│       └── LeftSidebar.tsx
├── /constants              # Static data (sidebar links, icons map)
│   └── index.js
├── /lib                    # Backend logic & Utilities
│   ├── mongoose.ts         # DB Connection logic
│   ├── utils.ts            # CN class merger (standard in Shadcn UI)
│   ├── /actions            # SERVER ACTIONS (Your main backend logic)
│   │   ├── user.actions.ts
│   │   └── thread.actions.ts
│   ├── /models             # Mongoose Schemas
│   │   ├── user.model.ts
│   │   └── thread.model.ts
│   └── /validations        # Zod Schemas
│       └── user.ts
└── middleware.ts           # Auth middleware (protects routes)
