---
name: Kinetic Engineering
colors:
  surface: '#141120'
  surface-dim: '#141120'
  surface-bright: '#3a3747'
  surface-container-lowest: '#0f0c1a'
  surface-container-low: '#1c1a28'
  surface-container: '#201e2d'
  surface-container-high: '#2b2837'
  surface-container-highest: '#363343'
  on-surface: '#e6dff4'
  on-surface-variant: '#ddc1ae'
  inverse-surface: '#e6dff4'
  inverse-on-surface: '#312e3e'
  outline: '#a58c7b'
  outline-variant: '#564334'
  surface-tint: '#ffb77f'
  primary: '#ffb77f'
  on-primary: '#4e2600'
  primary-container: '#ff8a00'
  on-primary-container: '#613100'
  inverse-primary: '#914c00'
  secondary: '#cbc3d8'
  on-secondary: '#322e3e'
  secondary-container: '#4e495a'
  on-secondary-container: '#c0b8cd'
  tertiary: '#cbc2df'
  on-tertiary: '#322d43'
  tertiary-container: '#ada5c0'
  on-tertiary-container: '#403a51'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdcc4'
  primary-fixed-dim: '#ffb77f'
  on-primary-fixed: '#2f1500'
  on-primary-fixed-variant: '#6f3900'
  secondary-fixed: '#e7dff5'
  secondary-fixed-dim: '#cbc3d8'
  on-secondary-fixed: '#1d1928'
  on-secondary-fixed-variant: '#494455'
  tertiary-fixed: '#e7defc'
  tertiary-fixed-dim: '#cbc2df'
  on-tertiary-fixed: '#1d182e'
  on-tertiary-fixed-variant: '#49435b'
  background: '#141120'
  on-background: '#e6dff4'
  surface-variant: '#363343'
typography:
  display-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 56px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Bricolage Grotesque
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-technical:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max: 1280px
---

## Brand & Style
The brand personality is a fusion of "garage-tinkerer" enthusiasm and professional precision. It is designed to evoke a sense of creative energy, curiosity, and technical expertise. The target audience includes combat robotics enthusiasts, 3D printing makers, and hardware engineers who appreciate both the aesthetic of the build and the data behind it.

The design style is **Modern Corporate with a Playful Edge**. It balances deep, technical dark modes with high-energy "bubbly" accents. This juxtaposition ensures the interface feels approachable and fun (reflecting the hobbyist aspect) while maintaining the structured, systematic feel required for documenting complex engineering projects. High-contrast orange accents act as the primary kinetic driver against a static, deep purple foundation.

## Colors
The palette is rooted in a deep, nocturnal base to allow hardware photography and data panels to pop.

*   **Primary (#ff8a00):** A vibrant "Safety Orange" used for calls-to-action, active states, and decorative borders. It symbolizes the heat of the workshop and the energy of competition.
*   **Secondary/Base (#1a1625):** A rich, dark purple-toned black used for the global background. It provides more depth and "tech-character" than a standard neutral gray.
*   **Tertiary/Surface (#2d283e):** A lighter mid-tone purple used for cards, panels, and container backgrounds to create subtle depth.
*   **Text/Neutral:** Pure white (#ffffff) for primary readability, with a muted lavender-gray (#8e899c) for secondary metadata and captions.

## Typography
This design system utilizes a high-contrast typographic pairing to reflect the brand's dual nature.

*   **Display & Headings:** Uses **Bricolage Grotesque**. Its quirky, rounded, and "bubbly" letterforms provide an expressive, friendly personality that breaks the rigidity of the dark UI.
*   **Body & UI:** Uses **Plus Jakarta Sans**. A clean, modern sans-serif that ensures high legibility for long-form build logs and project descriptions.
*   **Technical Data:** Uses **JetBrains Mono** for spec panels and data points. The monospaced nature emphasizes precision, code, and engineering accuracy.

## Layout & Spacing
The layout follows a **structured 12-column fluid grid** for desktop, collapsing to a single column for mobile devices.

*   **Vertical Rhythm:** Based on an 8px base unit. Most components use 24px (3 units) or 32px (4 units) of internal padding.
*   **Grid Logic:** Content is organized into clear functional zones. On project pages, a 3/4 layout is common: 8 columns for the primary build log and 4 columns for technical specs or navigation sidebars.
*   **Technical Alignment:** Elements like spec lists and data tables should align to the edges of their containers to maintain a "blueprint" feel.

## Elevation & Depth
Depth is created through **Tonal Layering** and **Subtle Outlines** rather than heavy shadows.

*   **Background:** Deepest layer (#1a1625).
*   **Containers:** Elevated surface layer (#2d283e) with a subtle 1px border (#3d3750) to define edges against the dark background.
*   **Interactive State:** Elements like active project steps or buttons may use a soft glow (0px 4px 20px) using the primary orange color at 20% opacity to indicate "active power."
*   **Overlays:** Technical tooltips use the secondary background with a high-contrast orange border to command attention.

## Shapes
The shape language mirrors the "bubbly" typography. Corners are consistently rounded to feel approachable and safe, contrasting with the "dangerous" nature of combat robotics.

*   **Standard Corners:** 0.5rem (8px) for buttons and small inputs.
*   **Large Containers:** 1rem (16px) for cards and spec panels.
*   **Pill Shapes:** Used exclusively for primary buttons (e.g., "Explore Projects") and status tags to make them stand out as high-interaction elements.

## Components

### Project Cards
Cards feature a large media area with a 16px corner radius. The text content sits below or overlaid with a dark gradient. Titles use `headline-md` in the primary orange color to ensure the project name is the first thing read.

### Technical Spec Panels
These containers use the tertiary surface color. Content is organized in a key-value list using `label-technical`. Keys are muted lavender, while values are white. A subtle horizontal separator (1px, 10% white) sits between rows to aid horizontal scanning.

### Vertical Timeline Sidebar
The sidebar uses a continuous 1px orange vertical line. Each "step" is a text label. The **Active Step** is highlighted with a rounded-rectangle background container (#2d283e) and an orange left-border (4px width).

### Buttons & Inputs
*   **Primary Button:** Pill-shaped, solid orange background, black text for maximum contrast. 
*   **Secondary Button:** Ghost style with an orange 1px border and orange text.
*   **Technical Tips:** Callout boxes featuring a "Gear" or "Lightbulb" icon, using a darker orange semi-transparent background and a solid orange border.

### Tables (Parts Lists)
Tables use a simplified "no-border" look. The header row is capitalized in `label-technical` with a solid color background. Content rows alternate with very subtle zebra striping to handle long lists of components.