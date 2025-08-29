# USA Shop — Forwarding & Delivery Platform (global.cdek.ru-style)

A production-ready blueprint for building a Russian-language website that replicates the core user experience of **CDEK Forward / CDEK Global**—but for the **USA Shop** brand.

> **Why this repo?**
> CDEK’s ecosystem centers on forwarding from foreign stores, cost calculators, shipment creation, tracking, and clear rules on forbidden goods. USA Shop will offer the same end-to-end flow (registration → warehouse address → consolidation → shipment → tracking) for shoppers who buy in the U.S. and ship abroad. ([CDEK Global][1], [CDEK Express][2])

---

## 1) Product Scope & Parity

### Primary user journeys

1. **Registration & onboarding** → user receives a **U.S. warehouse address** to receive online purchases (forwarding model). ([CDEK Global][1])
2. **Calculator** → estimate price/ETA by route, dimensions/weight (public tool). ([cdek-rs.com][3], [cdek-ae.com][4])
3. **Create shipment** → declare items, choose tariff/speed, pickup-point or courier delivery, optional insurance. ([CDEK Express][2])
4. **Tracking** → shipment status page + links to popular tracking aggregators for redundancy. ([17TRACK][5], [Parcels][6])
5. **Forbidden/prohibited goods** reference → show classes of dangerous goods not accepted. ([CDEK Express][7])
6. **Help/FAQ & Contact** → “How it works,” payment & customs basics.

> CDEK Forward (global.cdek.ru) advertises the forwarding service from U.S. stores to Russia with purchase assistance (“выкуп”), receiving goods at their U.S. address, and sending them on—our parity mirrors that. ([CDEK Global][1])

---

## 2) Information Architecture (Russian UI)

**Public pages (RU):**

* Главная (обзор сервиса, шаги 1-2-3)
* Как это работает (регистрация → адрес → консолидация → отправка)
* Калькулятор стоимости и сроков
* Отслеживание отправления
* Тарифы и направления
* Запрещённые товары
* Вопросы и ответы
* Новости/Обновления
* Контакты / Поддержка / Чат
* Политики (Пользовательское соглашение, Конфиденциальность, Возвраты)

**Личный кабинет (RU):**

* Мой адрес в США (склад + инструкции)
* Входящие посылки (фото, вес/габариты, хранение)
* Комплектация/консолидация
* Создать отправление (декларация, тариф, ПВЗ/курьер, страховка)
* Платежи и чеки
* Мои отправления (статусы, трек-номера)
* Поддержка (тикеты)

---

## 3) Tech Stack

* **Frontend**: Next.js 14 (App Router), TypeScript, React Server Components, Tailwind CSS, i18next (RU default).
* **Backend**: Node.js (NestJS) *or* Python (Django REST Framework).
* **DB**: PostgreSQL (with Prisma or Django ORM).
* **Queues/Jobs**: BullMQ / Celery for background tasks (webhooks, label gen, emails).
* **Storage**: S3-compatible (Cloudflare R2 / AWS S3) for package photos & docs.
* **Search**: PostgreSQL full-text for orders/addresses.
* **Auth**: Password + 2FA (TOTP), rate-limited.
* **DevOps**: Docker Compose, GitHub Actions (lint/test/build), Infrastructure as Code (Terraform optional).
* **Observability**: OpenTelemetry traces; Sentry for FE/BE errors.

---

## 4) Monorepo Layout

```
/apps
  /web         # Next.js (RU interface)
  /api         # NestJS or Django REST back-end
/packages
  /ui          # shared UI components
  /config      # eslint, tsconfig, prettier, env schemas
  /sdk         # typed API client for web
/infrastructure
  docker-compose.yml
  k8s/ (optional)
/docs
  product/architecture.md
  legal/ (policies templates)
```

---

## 5) Data Model (high-level)

* **users** (id, email, phone, locale=ru, kyc\_status)
* **addresses** (user\_id, type: profile/warehouse/pickup-point, country, city, lines)
* **warehouses** (code, time windows, contact, photos)
* **incoming\_packages** (warehouse\_id, user\_id, tracking\_ext, measured\_weight, dims, photos\[], storage\_until)
* **consolidations** (group of incoming\_packages, instructions)
* **shipments** (user\_id, from\_warehouse, to\_address/pvz\_id, service\_level, insurance, status, label\_url)
* **shipment\_items** (shipment\_id, title, qty, declared\_value, hs\_code)
* **tariffs** (route, speed, base\_price, per\_kg, volumetric\_factor)
* **payments** (shipment\_id, provider, amount, currency, status)
* **restrictions** (class, description, docs\_needed)
* **tickets** (user\_id, subject, messages\[])
* **webhooks** (event, payload, delivered\_at)

---

## 6) Core Features & Implementation Notes

### 6.1 Calculator (стоимость/сроки)

* Inputs: route (From: USA warehouse; To: RU city/PVZ), weight, dimensions, insurance, service level.
* Pricing engine: `base + per_kg * chargeable_weight` with **volumetric** rule (max of actual vs volumetric).
* Expose as `/api/v1/calculator` for frontend.
* Parity note: CDEK sites expose public calculators by route & size. ([cdek-rs.com][3], [cdek-ae.com][4])

### 6.2 Shipment Creation

* Steps: contents declaration → receiver data → delivery option (ПВЗ/курьер) → payment → label.
* Validate **prohibited goods** (show warnings & links). ([CDEK Express][7])
* Generate CN23/commercial invoice PDFs where applicable.

### 6.3 Tracking

* Internal timeline (accepted → left warehouse → customs → out for delivery → delivered).
* External redundancy: link to aggregators (17TRACK/Parcels/Ship24) using the same tracking code. ([17TRACK][5], [Parcels][6], [Ship24][8])

### 6.4 Mobile readiness

* PWA (installable) + deep links for tracking pages.
* Optional: publish an Android app later; CDEK also offers an app for order/track flows. ([Google Play][9])

### 6.5 Pick-up points (ПВЗ)

* Admin import for PVZ catalog (CSV → DB).
* Map UI with clustering and filters (hours, cashless).

### 6.6 Onboarding to U.S. warehouse

* After signup, show the **U.S. warehouse address** and formatting instructions.
* Auto-match inbound packages by user code on label (e.g., `US12345`).
* This mirrors the forwarding “receive at our warehouse” approach. ([CDEK Global][1])

---

## 7) Compliance & Content

* **Prohibited goods**: present clearly by hazard classes; block at checkout if matched. ([CDEK Express][7])
* **Capability of delivery**: emphasize that dangerous/forbidden items are not accepted; link to the full list. ([CDEK Express][10])
* **Sanctions & export controls**: *You must consult counsel and follow all applicable U.S., EU, and destination-country rules.*
* **Privacy**: GDPR/CCPA + (if applicable) Russian 152-FZ data-localization considerations for RU residents.
* **Taxes/Customs**: show that duties/fees may apply and are not part of base delivery unless specified.

---

## 8) Payment Options (architecture)

> Providers vary in policy/availability for RU-destined shipments; implement a pluggable gateway layer and enable only compliant methods for your jurisdictions.

* Gateway abstraction: `payments/Provider` (Stripe/Adyen/Bank transfer) + webhooks.
* 3DS support, billing descriptors, retries, and reconciliation jobs.
* Issue fiscal documents/invoices where required.

---

## 9) APIs

### Public

* `POST /api/v1/calculator` → {price, eta, breakdown}
* `GET /api/v1/track/:code` → {statusTimeline}
* `GET /api/v1/pvz` → list with geo filters

### Authenticated

* `GET /api/v1/incoming` (warehouse side lists received packages)
* `POST /api/v1/consolidations`
* `POST /api/v1/shipments`
* `POST /api/v1/payments/:id/confirm`

### Webhooks

* `/webhooks/payments` (paid/failed/refunded)
* `/webhooks/tracking` (status updates from carriers/aggregators)

---

## 10) Frontend (Next.js) Highlights

* **Language**: Russian default (SSR), `<html lang="ru">`, OpenGraph in RU.
* **Pages**: `/`, `/how-it-works`, `/calculator`, `/tracking`, `/forbidden`, `/tariffs`, `/contacts`, `/news`, `/login`, `/app/*` (dashboard).
* **Forms**: React Hook Form + zod validation (RU error messages).
* **Accessibility**: WCAG AA; keyboard navigation, focus rings.
* **SEO**: pre-rendered content pages; schema.org (FAQPage on FAQ; Organization; Service).
* **Maps**: Leaflet or Mapbox for PVZ.

---

## 11) Admin Console

* Warehouses: SLAs, time windows, storage fees.
* PVZ import & moderation.
* Tariff tables by route & weight breaks.
* Content (FAQ/News, RU Markdown).
* Dispute center (lost/damage workflow).
* Restriction editor (HS codes, class, doc requirements).

---

## 12) Dev Setup

### Prereqs

* Node 20+, Docker Desktop, pnpm.

### Run locally

```bash
git clone https://github.com/your-org/usa-shop.git
cd usa-shop
pnpm i

# Start DB & services
docker compose up -d

# Generate client (if Prisma)
pnpm -w prisma:generate

# Start API & Web
pnpm --filter api dev
pnpm --filter web dev
```

### Environment (example)

```
# /apps/api/.env
DATABASE_URL=postgres://...
STORAGE_BUCKET=usashop
STORAGE_ENDPOINT=https://<r2_or_s3_endpoint>
PAYMENTS_PROVIDER=stripe
TRACKING_WEBHOOK_SECRET=...

# /apps/web/.env.local
NEXT_PUBLIC_SITE_NAME="USA Shop"
NEXT_PUBLIC_DEFAULT_LOCALE=ru
API_URL=http://localhost:4000
```

---

## 13) Testing

* Unit: Jest (API), Vitest/RTL (Web).
* Integration: Playwright (calculator, create-shipment, tracking).
* Contract tests for `/api/v1/*`.
* Synthetic monitor for tracking page availability.

---

## 14) Content Stubs (RU)

* `/content/faq.ru.md` – вопросы/ответы о сроках, оплате, таможне.
* `/content/forbidden.ru.md` – краткая сводка + ссылка на полный перечень. ([CDEK Express][7])
* `/content/how-it-works.ru.md` – пошагово от регистрации до получения.

---

## 15) Security

* Brute-force protection; IP throttling.
* 2FA (TOTP).
* Encrypted PII at rest; KMS for keys.
* Admin SSO; audit logs.
* Regular penetration testing and dependency scanning.

---

## 16) Roadmap

* Label printing & customs docs (CN23/CI)
* Returns workflow
* Courier scheduling in RU cities (API partner)
* iOS/Android wrappers (later) ([Google Play][9])

---

## 17) References (what we mirrored)

* **Forwarding model & U.S. shopping angle** (CDEK Forward landing). ([CDEK Global][1])
* **Company scale & international logistics positioning** (CDEK Express). ([CDEK Express][2])
* **Public calculators** on regional CDEK sites. ([cdek-rs.com][3], [cdek-ae.com][4])
* **Tracking via aggregators** (17TRACK, Parcels, Ship24). ([17TRACK][5], [Parcels][6], [Ship24][8])
* **Forbidden goods / hazardous classes** guidance. ([CDEK Express][7])

---

### Legal Note

This repository provides a **clean-room implementation** inspired by publicly visible UX patterns. Do **not** reuse CDEK trademarks, copy their content, or scrape proprietary data. Always ensure your **shipping flows and payments comply with export controls, sanctions, and local laws** for all countries you serve.

---

## License

MIT (code), with separate licenses for any third-party assets you add.
