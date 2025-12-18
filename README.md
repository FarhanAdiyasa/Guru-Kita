# GuruKita

A web-based calculator that visualizes how long Indonesian teachers must save to afford common purchases, based on real salary data.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [API Overview](#api-overview)
- [Contributing](#contributing)
- [License](#license)

## Features

- Teacher profile selection with real salary data from various Indonesian regions
- Savings calculator for multiple item categories (housing, vehicles, electronics, etc.)
- Reality check mode with living cost adjustments
- Drag-and-drop timeline for prioritizing savings goals
- Responsive design optimized for mobile sharing
- Feedback and salary suggestion forms with external integrations

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| UI Components | Lucide React (icons) |
| Drag & Drop | dnd-kit |
| Database | Supabase (optional) |
| Email | Nodemailer |
| Deployment | Netlify |

## Prerequisites

- Node.js 20 or higher
- npm, yarn, or pnpm
- Git

## Installation

```bash
git clone https://github.com/FarhanAdiyasa/Guru-Kita.git
cd Guru-Kita
npm install
```

## Environment Variables

Copy the example file and configure:

```bash
cp .env.local.example .env.local
```

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | No |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | No |
| `GOOGLE_SHEET_SCRIPT_URL` | Google Apps Script URL for feedback form | No |

The application runs without external services. Supabase and Google Sheets integrations are optional for data persistence.

## Running the Application

### Development

```bash
npm run dev
```

Opens at `http://localhost:3000`.

### Production Build

```bash
npm run build
npm start
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── feedback/       # POST endpoint for feedback form
│   │   └── salary/         # POST endpoint for salary suggestions
│   ├── feedback/           # Feedback page
│   ├── suggest-salary/     # Salary suggestion page
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main calculator page
│   └── globals.css
├── components/
│   ├── GuruSelection.tsx   # Teacher profile selector
│   ├── ItemSelection.tsx   # Purchase item selector
│   ├── Result.tsx          # Calculation results with timeline
│   ├── SingleItemResult.tsx
│   ├── SortableTimelineItem.tsx
│   ├── ShareModal.tsx
│   └── lore/               # Educational context components
├── data/
│   ├── config.js           # All configurable data (teachers, items, settings)
│   └── lore.ts             # Story content for teacher profiles
├── lib/
│   ├── calculator-utils.ts # Calculation logic
│   └── supabase.ts         # Supabase client
└── types/
    └── calculator.ts       # TypeScript definitions
```

## API Overview

### POST /api/feedback

Submits user feedback to Google Sheets.

Request body:
```json
{
  "name": "string (optional)",
  "email": "string (optional)",
  "rating": "number (required)",
  "message": "string (required)"
}
```

### POST /api/salary

Submits teacher salary data suggestions.

Request body:
```json
{
  "location": "string",
  "level": "string",
  "status": "string",
  "salary": "number",
  "source": "string (optional)"
}
```

## Data Configuration

All teacher profiles, purchasable items, and calculator settings are defined in `src/data/config.js`. To add or modify data:

1. Open `src/data/config.js`
2. Edit the relevant section (`teachers`, `items`, `comparisons`, etc.)
3. Follow the existing object structure

Example teacher entry:
```javascript
{
  id: "unique-id",
  title: "Guru Honorer",
  location: "City, Province",
  level: "SD/SMP/SMA",
  experience: 5,
  status: "Honorer/PPPK/PNS",
  monthlySalary: 300000,
  description: "Brief description",
  source: "https://source-url.com"
}
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/add-new-region`)
3. Commit changes (`git commit -m "Add teacher data for new region"`)
4. Push to branch (`git push origin feature/add-new-region`)
5. Open a Pull Request

For salary data contributions, include the source URL for verification.

## License

MIT
