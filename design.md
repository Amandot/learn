---
name: Aetheric Flux
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1c1b1d'
  surface-container: '#201f22'
  surface-container-high: '#2a2a2c'
  surface-container-highest: '#353437'
  on-surface: '#e5e1e4'
  on-surface-variant: '#cbc3d7'
  inverse-surface: '#e5e1e4'
  inverse-on-surface: '#313032'
  outline: '#958ea0'
  outline-variant: '#494454'
  surface-tint: '#d0bcff'
  primary: '#d0bcff'
  on-primary: '#3c0091'
  primary-container: '#a078ff'
  on-primary-container: '#340080'
  inverse-primary: '#6d3bd7'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#adc6ff'
  on-tertiary: '#002e6a'
  tertiary-container: '#4d8eff'
  on-tertiary-container: '#00285d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#d0bcff'
  on-primary-fixed: '#23005c'
  on-primary-fixed-variant: '#5516be'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#131315'
  on-background: '#e5e1e4'
  surface-variant: '#353437'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  body-base:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  code-snippet:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 0.25rem
  sm: 0.5rem
  md: 1rem
  lg: 1.5rem
  xl: 2rem
  2xl: 3rem
  gutter: 1.5rem
  margin-mobile: 1rem
  margin-desktop: 2.5rem
---

## Brand & Style
The design system is engineered for high-performance productivity tools and developer-centric interfaces. It evokes a sense of "technical luxury"—combining the precision of a professional IDE with the cinematic aesthetic of high-end consumer hardware.

The brand personality is **sophisticated, focused, and forward-leaning**. It targets power users who value speed, keyboard-first navigation, and visual clarity. The emotional response should be one of "calm mastery"—where the UI recedes to highlight the user's work, but provides tactile, high-fidelity feedback upon interaction.

The design style is a hybrid of **Modern Corporate** and **Glassmorphism**. It utilizes deep obsidian surfaces, ultra-fine borders, and selective "neon" accents to guide the eye without causing fatigue. Subtle motion and light-based depth (glows, blurs) replace traditional skeuomorphism to create a futuristic, digital-native atmosphere.

## Colors
This design system operates on a "Carbon and Light" philosophy. The foundation is an absolute deep charcoal/black to maximize contrast and reduce power consumption on OLED displays.

- **Foundational Neutrals**: The background is fixed at `#09090b`. Surface levels are built using `#111827` with varying opacities to create hierarchy.
- **The Spectrum**: Accents are used sparingly for semantic meaning and brand moments. **Violet (#8b5cf6)** is the primary action color. **Cyan (#06b6d4)** and **Blue (#3b82f6)** are used for secondary features, data visualization, and "active" states (e.g., progress bars, status indicators).
- **Transparency**: Utilize the border token `rgba(255, 255, 255, 0.08)` for all structural lines. This ensures borders feel like light catching an edge rather than a heavy physical divider.

## Typography
The typography system prioritizes legibility and technical precision.

- **Headlines**: Uses **Geist** for its minimalist, geometric construction. It feels modern and integrates perfectly with technical layouts.
- **Body**: Uses **Inter** for its proven readability in high-density SaaS environments.
- **Labels & Data**: Uses **JetBrains Mono** for small labels, IDs, and metadata. This reinforces the "developer-tool" aesthetic and ensures numerical data aligns perfectly.

Hierarchy is achieved through weight and color (white for headings, gray-400 for secondary text) rather than excessive size variations.

## Layout & Spacing
The layout follows a **Fluid Grid** model with strict adherence to an 8px spacing rhythm for components and a 4px rhythm for internal element padding.

- **Bento Grid System**: Main dashboard views should utilize a Bento-style grid where cards span variable column counts (1, 2, or 3) but maintain uniform gutters of `1.5rem`.
- **Sidebar**: A collapsible navigation sidebar should be fixed at `240px` when expanded, collapsing to `64px`.
- **Breakpoints**:
  - **Mobile**: < 768px. Single column, `1rem` margins.
  - **Tablet**: 768px - 1280px. 6-column grid.
  - **Desktop**: > 1280px. 12-column grid, `2.5rem` max margins.

## Elevation & Depth
Depth is created through **light emission** rather than physical shadow.

1.  **Tonal Layers**: The background (`#09090b`) is the lowest layer. Surface containers (`#111827`) sit above it.
2.  **Glassmorphism**: Modals and dropdowns use a semi-transparent background (`rgba(17, 24, 39, 0.7)`) with a `12px` backdrop-filter blur.
3.  **Glows**: Active states or "Hero" cards utilize a very soft, diffused outer glow using the primary color (`#8b5cf6`) with a 20% opacity and 40px blur radius.
4.  **Borders**: Instead of shadows, use "Inner Light" borders. A 1px solid border at `rgba(255,255,255,0.08)` defines the edge. For hovered elements, increase the border brightness to `rgba(255,255,255,0.2)`.

## Shapes
The shape language is **geometric and refined**. 

- **Containers**: Standard cards and Bento tiles use `0.5rem` (rounded) corners. This maintains a structured, professional look.
- **Buttons & Inputs**: Use `0.5rem` to match containers.
- **Selection States**: High-precision elements like tags or small chips may use `rounded-xl` (`1.5rem`) to provide a visual distinction from structural blocks.

## Components
- **Buttons**: Primary buttons are solid `#8b5cf6` with white text. Secondary buttons are transparent with the standard border token and a subtle hover lift.
- **Bento Tiles**: Each tile should have a `1px` border. Use a subtle gradient background from top-left to bottom-right (Surface Color to slightly lighter Surface Color).
- **Input Fields**: Ghost-style inputs. Transparent background, border only. On focus, the border color transitions to the primary violet and a subtle inner glow is applied.
- **Activity Heatmap**: Mirror the GitHub style using a 4-step scale of the Cyan accent color (`#06b6d4`). Empty cells should be `rgba(255,255,255,0.03)`.
- **Progress Bars**: Use a dual-layered approach. A dark track and a glowing foreground using a linear gradient of Primary to Secondary.
- **Sidebar Navigation**: Active items should be indicated by a vertical 2px line on the far left and a subtle `rgba(255,255,255,0.04)` background fill.