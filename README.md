# Accenture-ui

<div align="center" className="flex justify-center items-center gap-4">
  <a aria-label="NPM package" href="https://npmjs.com/accenture-assessment-components">
    <img src="https://img.shields.io/badge/NPM_package-black?logo=NPM&labelColor=black" />
  </a>
  <a aria-label="React" href="https://react.dev/">
    <img src="https://img.shields.io/badge/React-black?logo=React&labelColor=black" />
  </a>
  <a aria-label="Storybook" href="https://storybook.js.org/">
    <img src="https://img.shields.io/badge/Storybook-black?logo=storybook&labelColor=black" />
  </a>
  <a aria-label="Vite" href="https://vitejs.dev/">
    <img src="https://img.shields.io/badge/Vite-black?logo=vite&labelColor=black" />
  </a>
  <a aria-label="Vitest" href="https://vitest.dev/">
    <img src="https://img.shields.io/badge/Vitest-black?logo=vitest&labelColor=black" />
  </a>
  <a aria-label="TypeScript" href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-black?logo=TypeScript&labelColor=black" />
  </a>
  <a aria-label="My resumé" href="https://www.cibulka.codes/cv.pdf">
    <img src="https://img.shields.io/badge/Download_my_resumé!-blue" />
  </a>
</div>

<br />

<img src="https://accenture-ui.cibulka.codes/cover.png" />

<br />

## What is this?

This repository serves as a proof of concept for a design system that aims to streamline development and ensure consistency across various front-end platforms. As part of an interview assessment, this system demonstrates a potential approach to expanding and innovating an existing design system to accommodate multiple devices. While this is a starting point, it highlights the feasibility of creating a centralized hub for reusable components and guidelines.

- See it in action: [accenture-ui.cibulka.codes](https://accenture-ui.cibulka.codes)
- Browse the presentation: [accenture.cibulka.codes](https://accenture.cibulka.codes)

## Features

- **NPM Package**: The design system is packaged as an NPM module for easy integration into projects.
- **Storybook**: A development environment for visualizing and interacting with components in isolation, facilitating testing and documentation.
- **Unit Tests**: Automated tests verify the correctness and functionality of components, ensuring quality and reliability.
- **Cross-Platform Compatibility**: The design system is designed to adapt seamlessly to different platforms, including mobile, desktop, in-car HMI, smart home devices, and wearables.

## Benefits

- **Efficiency**: Reduces development time by providing pre-built components.
- **Consistency**: Maintains a unified look and feel across all platforms.
- **Usability**: Ensures a consistent user experience.
- **Innovation**: Supports the creation of innovative and engaging interfaces.

## How to use

### Integrate to project

```
import { Button } from 'accenture-assessment-components';

export function App() {
  return <Button>My button</Button>
}
```

### Use localy

Clone the repository, install dependencies and launch.

```
git clone https://github.com/cibulka/accenture-assessment-components
cd accenture-assessment-components
npm install
npm run dev
```

#### Run Storybook

Storybook will launch on a local port. You can also see the [demo online](https://accenture-ui.cibulka.codes).

```
npm run storybook
```

#### Run tests

Tests will generate coverage report both in terminal, as well as in a static HTML build in `/coverage/index.html`.

```
npm run test
```

## 🧔‍♂️ Made by

Coded by **Petr Cibulka**. [Check my website](https://www.cibulka.codes) or [play Tetris](https://www.cibulka.codes/tetris), my open-source project. 😊
