已经为你完成了 copilot-instructions.md 的深度 Review 和整合。我不仅将刚才讨论的“文件结构”和“多语言处理”嵌入了合适的位置，还针对你遇到的“桌面显示太窄”和“MUI v6 最佳实践”进行了微调。

以下是最新、最完整的版本，你可以直接替换原文件内容。

Project: Xiacaotang React Migration (Vibe Coding Mode)
1. Context & Vision
Source: Migrating from WordPress (https://www.xiacaotang.com) to a React + TypeScript static site.

Business: A TCM (Traditional Chinese Medicine) Clinic in Mississauga, Ontario, introducing "道医" (Taoist Medicine).

Aesthetic (Vibe): "Little Green" or "Yin-Yang style". The design must feel traditional, balanced, and professional.

2. Technical Stack
Frontend: React (Functional Components), TypeScript (Strict Mode).

UI Framework: Material UI (MUI) v6.

Styling Solution: MUI Theme Engine (Emotion/styled-components).

Icons: Use @mui/icons-material for standard actions; use lucide-react for brand-specific icons.

Maps: Leaflet for the Contact Us page (Mississauga location).

Data Logic: All content is driven by local JSON files in /src/assets/ (or /src/data/).

SEO: Use react-helmet-async for head tag management.

3. Style & Vibe (MUI Implementation)
Theme Definition: Create a custom MUI theme in /src/theme.ts.

Palette:

primary: Deep Forest Green (#1a2f23).

secondary: Warm Gold or Earthy tones.

background: Off-white/Parchment (#fdfaf5).

text: Charcoal (#333333).

Aesthetic: Focus on "Yin-Yang" balance (symmetry and contrast). Use high-contrast Serif fonts for headings and Sans-serif for body text.

4. Layout & Folder Standards
Global Layout: All pages must be wrapped in MainLayout.tsx (located in src/layouts/).

Responsiveness: Use MUI <Container maxWidth="lg"> as the default wrapper to ensure a professional desktop view (avoiding mobile-only narrow appearance).

Directory Hierarchy:

src/pages/: Contains only entry-point components (Routing, SEO, Data-fetching).

src/components/pages/: Contains large, page-specific UI sections (e.g., AboutContent.tsx).

src/components/common/: Contains reusable elements (e.g., Navbar, Footer, Sidebar, ServiceCard).

src/layouts/: Contains MainLayout.tsx for global scaffolding.

Development Pattern: When creating a new page, define the route in App.tsx, create the entry in src/pages/, and delegate UI to src/components/pages/.

5. Page-Specific Rules
Home Page (Path: /):

Unique Full-width Hero section using react-material-ui-carousel.

No Sidebar.

Inner Pages (Default Pattern):

Use MUI <Grid2 container> for a 2-column layout.

Left column (Main): <Grid2 size={{ xs: 12, md: 9 }}>.

Right column (Sidebar): <Grid2 size={{ xs: 12, md: 3 }}> containing Business Hours and Social Media.

Routes: /about, /services, /contact, /testimonials.

6. Coding Behavior & Data Logic
Data First: Prioritize fetching content from /src/assets/data.json or equivalent JSON files.

Types: Always define TypeScript interfaces in /src/types before building components.

Crawl & Fallback: Use data from the original site; if missing, use placeholder [NEED_MANUAL_INPUT] in JSON.

Modularity: Extract reusable MUI elements into src/components/common/.

7. Internationalization (i18n) & Multilingual Data
Languages: English (en), French (fr), Chinese (zh).

Multilingual Data Access:

Data fields (names, bios, etc.) are objects: { en: string; zh: string; fr: string; }.

Never render objects directly in Typography to avoid ReactNode errors.

Use a helper utility getLocalizedValue(obj, lang) from src/utils/i18nHelper.ts.

Always provide a fallback (default to en) if the current language content is empty.

8. SEO & Metadata Standards
Global Strategy: Every page component must include unique Title, Description, and Keywords via react-helmet-async.

Multi-language SEO:

Implement hreflang tags.

Update the lang attribute on the <html> tag dynamically.