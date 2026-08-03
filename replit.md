# Connect Navigation and Links

A React + Vite web application exported from Figma (Make). It renders an Arabic-language multi-page site for جمعية الابتكار والاستدامة المجتمعية (Innovation and Community Sustainability Association).

## Stack

- **React 18** with React Router (hash-based routing)
- **Vite 6** dev server
- **Tailwind CSS v4** + shadcn/ui components (Radix UI)
- **MUI** (Material UI) components alongside shadcn
- Original design: https://www.figma.com/design/rmT48hzTh9pJ5Ia7QC0VMj/Connect-Navigation-and-Links

## Running locally on Replit

```bash
npm run dev      # starts Vite dev server on port 5000
npm run build    # production build → dist/
```

The workflow **Start application** runs `npm run dev` automatically.

## Routes

| Path | Component |
|------|-----------|
| `/` | Home (Frame3877) |
| `/about` | About (Frame3876) |
| `/programs` | Programs (Frame3875) |
| `/initiatives` | Initiatives (Frame3867) |
| `/knowledge` | Knowledge Center (Frame3874) |
| `/empowerment` | Empowerment (Frame3871) |
| `/contact` | Contact (Frame3870) |
| `/policies` | Policies (Frame3869) |
| `/governance` | Governance (Frame3868) |
| `/admin` | CMS Admin Panel |

## Notes

- `node_modules` must be installed on Linux (the zip contained macOS/Windows binaries). Run `npm install` after any fresh clone.
- Assets live in `src/assets/` and are resolved via a custom Vite plugin (`figma-asset-resolver`).

## User preferences

_None recorded yet._
