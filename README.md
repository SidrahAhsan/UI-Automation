# UI Automation (Playwright + TypeScript) 🎭🧪

Automated end-to-end (E2E) testing framework using [Playwright](https://playwright.dev/) with TypeScript. This project is designed for UI validation, regression checks, and test coverage of key user flows.

---

## 🚀 Features

- 🌐 Cross-browser support (Chromium, Firefox, WebKit)
- ✅ Full TypeScript support with strong typing and IntelliSense
- 🧱 Page Object Model (POM) structure
- ⚙️ Easily configurable for multiple environments
- 🔁 Integration-ready with CI/CD (e.g., GitHub Actions, Jenkins)
- 📸 Screenshots and video recording for failures

---

## 📦 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/SidrahAhsan/UI-Automation.git
cd UI-Automation
npm install
npx playwright test
npx playwright show-report

```
### Project Structure

UI-Automation/
├── tests/                # Test specs (organized by modules/features)
│   └── example.spec.ts
├── pages/                # Page Object classes
│   └── loginPage.ts
├── utils/                # Test helpers & utilities
├── playwright.config.ts  # Playwright configuration
├── package.json
├── tsconfig.json
└── README.md

