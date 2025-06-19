# Project Overview

This project was generated using the **Angular CLI** with **standalone components** and **Tailwind CSS** integration. It offers a modular architecture with reusable components and support for both RTL and LTR layouts.

## Setuo
- Read this documentation and go through the project.
- Copy and paste the assets folder into your project.
- Copy and paste the tailwind.config.js into your project.
- Copy and paste the styles.css into your project.
- npm install then ng serve to see how the components in this repo look like.
- if you want to turn it from ltr (english) to rtl (arabic) then in index.html give the html tage a property called dir="rtl".
- ```html
<html lang="ar" dir="rtl">
```

## Folder Structure

#### `src/assets/`

- Fonts organized under:
  - `Arabic/`, `English/`
- Raw SVG files:
  - `pifss-logo.svg`, `pifss-logo-h.svg`, `pifss-logo-v.svg`

#### `src/app/components/icons/`

- Angular standalone components that wrap and render the SVGs as inline `<svg>` elements:
  - `pifss-logo.component.ts`
  - `pifss-logo-h.component.ts`
  - `pifss-logo-v.component.ts`

#### `src/app/components/`

- Standalone UI components like:
  - `button/`, `card/`, `input/`, `toggle/`, `navbar/`, etc.

#### `src/app/pages/`

- Route-level test pages:
  - `home/`, `about/`, `contact/`, `arabic-home/`, etc.

#### `style.css`

- Tailwind-based global styles and component-specific CSS.

## Getting Started

1. **Clone the repository**

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   ng serve
   ```

4. Open your browser at [http://localhost:4200](http://localhost:4200)
