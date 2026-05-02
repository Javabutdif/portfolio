# Anton James Genabio - Portfolio

A minimalist, high-performance web portfolio built for Anton James Genabio, an **Associate Software Engineer** at Accenture and **Aspiring AI Engineer**.

## 🚀 Tech Stack

- **Framework**: React via Vite
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion (strict linear-spring physics)
- **Icons**: Phosphor Icons (@phosphor-icons/react)
- **Typography**: Plus Jakarta Sans (Display), Inter (Body), JetBrains Mono (Code/Meta)

## 🏗 Architecture & Design

The application uses a clean, strict minimalist UI heavily inspired by Linear and Vercel. 
- **Monochrome Theme**: Pitch black background (`#000000`) with elevated dark grey surfaces (`#111111`) and high-contrast white text.
- **Hairline Structuring**: Uses pure 1px solid borders (`border-white/10`) without any heavy shadows, glowing backgrounds, or glassmorphism.
- **Responsive Layout**: A unified single-column `max-w-5xl` design with a sticky, frosted-glass top navigation bar.

## 📦 Getting Started

### Prerequisites
Make sure you have Node.js and NPM installed. The project uses TurboRepo for workspace management.

### Installation

1. Install dependencies from the root directory:
```bash
npm run bootstrap
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal).

## 🤖 AI Workflow Docs

This project adheres to strict AI workflow and subagent handoff structures. The relevant documentation and tracking artifacts can be found in the `docs/` directory:
- `docs/ai/tasks/`: Current task briefs and checklists.
- `docs/specs/`: Approved behavior and architecture specs.
- `docs/plans/`: Implementation plans.
- `docs/ai/decisions.md`: Architecture Decision Records (ADRs).

To re-initialize or repair the AI workspace, run:
```bash
npm run setup:ai
```
