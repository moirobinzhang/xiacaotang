Project: Xiacaotang React Migration (Vibe Coding Mode)
1. Context & Vision
Source: Migrating from WordPress (https://www.xiacaotang.com to a React + TypeScript static site.

Business: A TCM (Traditional Chinese Medicine) Clinic in Mississauga, Ontario, introducing "道医" (Taoist Medicine).

Aesthetic (Vibe): "Little Green" or "Yin-Yang style". The design must feel traditional, balanced, and professional.

2. Technical Stack
Frontend: React (Functional Components), TypeScript (Strict Mode).

UI Framework: Material UI (MUI) v6.

Styling Solution: MUI Theme Engine (Emotion/styled-components).

Icons: Use @mui/icons-material for standard actions; use lucide-react for brand-specific icons.

Maps: Leaflet for the Contact Us page (Mississauga location).

Data Logic: All content is driven by local JSON files in /src/data.

SEO: Use react-helmet-async for head tag management.

3. Style & Vibe (MUI Implementation)
Theme Definition: Create a custom MUI theme in /src/theme.ts.

Palette:

primary: Deep Forest Green (#1a2f23).

secondary: Warm Gold or Earthy tones.

background: Off-white/Parchment (#fdfaf5).

text: Charcoal (#333333).

Aesthetic: Focus on "Yin-Yang" balance (symmetry and contrast). Use high-contrast Serif fonts for headings and Sans-serif for body text.

4. Page Level & Layout Standards
Global Layout: All pages wrap a MainLayout using MUI <Box> and <Container>.

Home Page (Path: /):

Unique Full-width Hero section using react-material-ui-carousel.

No Sidebar.

Priority SEO: Focus on "TCM Mississauga" and "道医".

Inner Pages (Default Pattern):

Use MUI <Grid2 container> for a 2-column layout.

Left column (Main): <Grid2 size={{ xs: 12, md: 9 }}>.

Right column (Sidebar): <Grid2 size={{ xs: 12, md: 3 }}>.

Sidebar: Must feature Business Hours and Social Media (Facebook, Twitter, WeChat).

Specific Pages:

/about: Display two Doctor Profile components (data from JSON).

/services: A grid listing services, each linking to a sub-page.

/contact: Integrate Leaflet map and a MUI-based contact form.

/testimonials: A list-style layout optimized for blog-like entries.

5. Coding Behavior & Data Logic
Data First: Prioritize fetching content from /src/data/*.json.

Crawl & Fallback: Use data from the original site; if missing, use placeholder [NEED_MANUAL_INPUT] in JSON.

Types: Always define TypeScript interfaces in /src/types before building components.

Modularity: Extract reusable MUI elements (e.g., ServiceCard, SidebarBox) into /src/components.

Folder Structure: Strictly follow /src/components, /src/pages, /src/types, and /src/data.

6. Internationalization (i18n)
Languages: English (en), French (fr), Chinese (zh).

Implementation: Use react-i18next.

Storage: UI strings in /public/locales/{lng}/translation.json.

Formatting: Ensure dates and numbers follow local formatting based on the active language.

7. SEO & Metadata Standards
Global Strategy: Every page component must include unique Title, Description, and Keywords.

Multi-language SEO:

Implement hreflang tags for language variants.

Dynamically update the lang attribute on the <html> tag.

Metadata must be translated for each language.