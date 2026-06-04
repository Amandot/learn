# LearnDash — Student Learning Dashboard

A futuristic, dark-themed Student Learning Dashboard built with Next.js 15, designed as a premium SaaS application inspired by Linear, Vercel, Notion, and Raycast.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss)
![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E?style=flat-square&logo=supabase)

---

## ✨ Features

- **Bento Grid Layout** — Premium card-based dashboard with glassmorphism
- **Framer Motion Animations** — Staggered entrances, spring hover effects, animated progress bars
- **Supabase Integration** — Server-side data fetching with Next.js Server Components
- **Collapsible Sidebar** — Animated with `layoutId` active navigation indicator
- **Activity Graph** — GitHub-style contribution visualization
- **Loading Skeletons** — Shimmer animations matching the final layout
- **Error Boundaries** — Graceful fallback UI with retry support
- **Fully Responsive** — Desktop, tablet, and mobile layouts
- **Accessible** — Semantic HTML, ARIA labels, keyboard navigation

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 15 (App Router) | Framework & SSR |
| TypeScript | Type safety |
| Tailwind CSS v4 | Styling |
| Framer Motion | Animations |
| Supabase | Database & API |
| Lucide React | Icons |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm
- A [Supabase](https://supabase.com) project

### 1. Clone & Install

```bash
git clone <repo-url>
cd frontend
npm install
```

### 2. Set Up Environment Variables

Copy the example file and fill in your Supabase credentials:

```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 3. Set Up Supabase Database

Run this SQL in your Supabase SQL Editor:

```sql
CREATE TABLE courses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  progress INTEGER NOT NULL DEFAULT 0,
  icon_name TEXT NOT NULL,
  total_lessons INTEGER DEFAULT 10,
  completed_lessons INTEGER DEFAULT 0,
  thumbnail_url TEXT DEFAULT '',
  accent_color TEXT DEFAULT '#8b5cf6',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public read" ON courses FOR SELECT USING (true);

INSERT INTO courses (title, progress, icon_name, total_lessons, completed_lessons, accent_color) VALUES
  ('Advanced React Patterns', 75, 'BookOpen', 16, 12, '#8b5cf6'),
  ('Next.js Mastery', 60, 'Rocket', 14, 8, '#3b82f6'),
  ('TypeScript Fundamentals', 90, 'Code', 20, 18, '#06b6d4'),
  ('UI Animation Design', 45, 'Sparkles', 11, 5, '#ef4444');
```

> **No login required.** The app runs with built-in demo data if env vars are omitted.

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — you'll be redirected to the dashboard.

---

## 📁 Folder Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (sidebar + main)
│   ├── page.tsx            # Redirects to /dashboard
│   ├── globals.css         # Theme, glassmorphism, animations
│   └── dashboard/
│       ├── page.tsx        # Server Component (data fetching)
│       ├── loading.tsx     # Skeleton loading UI
│       └── error.tsx       # Error boundary with retry
├── components/
│   ├── Sidebar.tsx         # Collapsible navigation
│   ├── HeroCard.tsx        # Welcome + streak card
│   ├── CourseCard.tsx      # Course progress card
│   ├── ActivityCard.tsx    # Contribution graph
│   ├── BentoGrid.tsx       # Staggered grid wrapper
│   └── DynamicIcon.tsx     # Icon name → component mapper
├── lib/
│   └── supabase.ts         # Supabase client + getCourses()
└── types/
    └── course.ts           # Course interface
```

---

## 🎨 Design System

| Token | Value |
|---|---|
| Background | `#09090b` |
| Card | `#111827` |
| Border | `rgba(255,255,255,0.08)` |
| Accent Purple | `#8b5cf6` |
| Accent Cyan | `#06b6d4` |
| Accent Blue | `#3b82f6` |

---

## 🌐 Deployment (Vercel)

1. Push to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy — zero config needed

---

## 📄 License

MIT
