# vibecart-offers-ui (ofms-ui)

Admin dashboard for Offer Management — create and manage promotional offers, coupon codes, loyalty rewards, and referral programs.

**Port:** `3002`  
**React:** 19.2.7 | **Framework:** Create React App

---

## Features

- Create and manage offers (COUPON, PROMOTIONAL, LOYALTY, REFERRAL)
- Configure discount type (FLAT / PERCENTAGE) and scope (SKU / ITEM / BILL)
- Set validity dates and quantity limits
- Track offer usage per order/customer
- Analytics charts (AmCharts5, Recharts)
- Split-pane layout for list + detail views

---

## Tech Stack

| Package | Version | Purpose |
|---|---|---|
| `react` | 19.2.7 | UI framework |
| `react-router-dom` | 6.30.4 | Client-side routing |
| `@reduxjs/toolkit` | 2.12.0 | State management |
| `redux` | 5.0.1 | Core Redux store |
| `redux-thunk` | 3.1.0 | Async action middleware |
| `react-redux` | 9.3.0 | React–Redux bindings |
| `axios` | 1.7.5 | HTTP client |
| `bootstrap` | 5.3.8 | CSS framework |
| `react-bootstrap` | 2.10.10 | Bootstrap React components |
| `react-select` | 5.10.2 | Enhanced select dropdowns |
| `recharts` | 2.15.4 | Composable charts |
| `@amcharts/amcharts5` | 5.18.0 | Advanced charts |
| `react-split-pane` | 0.1.92 | Split-pane layout |
| `@heroicons/react` | 2.2.0 | Icons |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server (http://localhost:3002)
npm start

# Production build
npm run build
```

---

## Environment Variables

Create a `.env` file in this directory:

```
PORT=3002
REACT_APP_API_URL=http://localhost:5001
SKIP_PREFLIGHT_CHECK=true
GENERATE_SOURCEMAP=false
```

| Variable | Description |
|---|---|
| `REACT_APP_API_URL` | API Gateway base URL |
| `PORT` | Dev server port |

---

## API Integration

```
Base URL: REACT_APP_API_URL
Offers: /api/v1/vibe-cart/offers/**
```

---

## Project Structure

```
src/
├── App.js
├── index.js
└── OFMS/
    ├── Offers/     # Offer CRUD forms and list
    ├── Dashboard/  # Usage analytics and charts
    └── common/     # Shared components
```

---

## Notes

- `.npmrc` sets `legacy-peer-deps=true` — required because `react-split-pane@0.1.92` declares peer deps for React ≤18 but works correctly with React 19 at runtime.
