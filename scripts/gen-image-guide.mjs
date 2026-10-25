import { projects } from '../src/data/projects.js'
import { certifications } from '../src/data/certifications.js'
import { writeFileSync } from 'fs'

const rows = []
for (const p of projects) {
  const phone = p.device === 'phone', desk = p.device === 'desktop'
  const note = p.published === false ? ' (hidden until `published: true`)' : ''
  rows.push(`| ${p.title}${note} | \`public${p.coverImage}\` | ${phone ? 'Cover: 16:10 composition with 1–2 phone screenshots on a dark background' : desk ? 'Cover: application/window screenshot' : 'Cover: main page or primary view'} | 1600×1000 (16:10) |`)
  p.screenshots.forEach((s) => rows.push(`| ${p.title} | \`public${s}\` | ${phone ? 'Portrait phone screenshot' : 'Landscape screenshot of a key feature'} | ${phone ? '1080×1920 (9:16)' : '1600×1000 (16:10)'} |`))
}
for (const c of certifications) rows.push(`| Certificate: ${c.title.length > 38 ? c.title.slice(0, 38) + '…' : c.title} | \`public${c.image}\` | The actual certificate (scan or export) | ~1600×1200, any orientation (shown whole) |`)

const md = `# IMAGE-GUIDE

Save images at the exact paths below. The site picks them up automatically: no code changes, just refresh the dev server or redeploy.
All files are **WebP** (aim for under ~250 KB each). Every image is **optional**.

## If an image is missing
- **Cover or certificate:** a themed placeholder with the same aspect ratio appears (project name, plus a phone or window frame for mobile and desktop projects). Nothing breaks.
- **Screenshots:** the "View Screenshots" toggle appears only once at least one screenshot file exists. Missing screenshots are never shown.
- **A file that fails to load** switches to the placeholder automatically.

## Files

| Section | Save as | What it shows | Size |
|---|---|---|---|
${rows.join('\n')}

## Adding an image later
1. Convert to WebP (for example with squoosh.app) and resize to the size in the table.
2. Save it at the exact path, e.g. \`public/images/projects/visionlab/cover.webp\`.
3. Refresh. That is all.

## Adding more screenshots to a project
In \`src/data/projects.js\`, raise the count in that project's \`...img('slug', N)\` call (e.g. \`img('visionlab', 4)\`), then save \`screenshot-03.webp\`, \`screenshot-04.webp\`.

## Showing the hidden desktop project
Fill in \`desktop-aspnet\` in \`src/data/projects.js\` (title, description, technologies) and set \`published: true\`.
`
writeFileSync(new URL('../IMAGE-GUIDE.md', import.meta.url), md)
console.log(md.split('\n').length, 'lines;', rows.length, 'image rows')