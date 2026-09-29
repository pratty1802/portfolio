# Prateek Porwal — Portfolio

Cool-studio personal site for resume use. Next.js + Tailwind + Framer Motion. Content lives in [`src/content/content.ts`](src/content/content.ts)—edit that file to add experience or projects, then redeploy.

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel (free Hobby)

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Next.js** (auto-detected). Leave build settings default.
4. Click **Deploy**.
5. Optional: Project → Settings → Domains → add `yourname.dev` (buy the domain elsewhere, point DNS to Vercel).

After the first deploy, every push to `main` redeploys automatically.

### Resume line

```text
Portfolio: https://<your-vercel-url>
```

## Updating content

Edit `src/content/content.ts`:

- `site` — name, role line, about, contact links
- `work` — selected work rows
- `highlights` — compact extras (MCP, rate limit API)
- `experience` — jobs / mentoring

No CMS or backend required.
