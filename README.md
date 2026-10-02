# John David — Next.js Portfolio

A four-page student portfolio built with Next.js App Router, React, TypeScript, and CSS.

## Run locally

Install Node.js 22 or newer. Open this folder in VS Code, then use the terminal:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Pages

| Page | URL | File |
| --- | --- | --- |
| Home (index) | `/` | `app/page.tsx` |
| Portfolio | `/portfolio` | `app/portfolio/page.tsx` |
| About | `/about` | `app/about/page.tsx` |
| Gallery | `/gallery` | `app/gallery/page.tsx` |

URLs use forward slashes. The shared `components/Header.tsx` uses `next/link` for navigation and `usePathname` to highlight the current page. It also sets `aria-current="page"` for accessibility. Layout and footer are shared through `app/layout.tsx`.

## Build

```bash
npm run build
```

The application exports static files to `out/` for hosting. Use `npm run dev` to run it locally.

## Content

The portfolio and gallery include original sample interface concepts. They are explicitly labeled as sample projects, rather than completed client work. Edit the project data in `app/portfolio/page.tsx`, the biography in `app/about/page.tsx`, and colors in `app/globals.css`.

## GitHub submission

1. Sign in at https://github.com and create a repository named `nextjs-portfolio`.
2. Choose **Public**. Leave the initial README, license, and .gitignore options unchecked.
3. Extract the project ZIP. Open the extracted folder in VS Code.
4. Upload the extracted project contents, including `app`, `components`, `public`, `package.json`, `tsconfig.json`, `next.config.ts`, `next-env.d.ts`, and `.gitignore`. Do not upload the ZIP itself or `node_modules`, `.next`, or `out`.
5. For browser upload, choose **uploading an existing file** / **Add file → Upload files**, drag the extracted files and folders, and click **Commit changes**. Or use Git:

```bash
git init
git add .
git commit -m "Build four-page Next.js portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/nextjs-portfolio.git
git push -u origin main
```

6. Submit the repository URL and screenshots of all four pages. Verify the repository opens while signed out.

## Screenshot capture

The `screenshots` folder contains a capture script. Screenshots have not yet been generated in this environment. From the project folder, start `npm run dev`; in a second terminal:

```bash
npm install --no-save playwright
npx playwright install chromium
node screenshots/capture.mjs
```

The script saves desktop and mobile screenshots of each page and checks navigation, the active header, and horizontal overflow.

## Capture screenshots manually

Run `npm run dev`. Open each page at `http://localhost:3000`, `/portfolio`, `/about`, and `/gallery`. On Windows, press **Windows + Shift + S** and save each image as `home.png`, `portfolio.png`, `about.png`, and `gallery.png`. Include the highlighted navigation button in every screenshot.
