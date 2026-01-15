# Product Data Explorer - Complete Codebase Overview

## 📁 Project Structure

```
Data_Extraction/
├── backend/          # NestJS Backend API
└── frontend/         # Next.js Frontend (App Router)
```

---

## 🔧 Backend (NestJS)

### Current Files

#### Configuration
- **`package.json`** - Dependencies: NestJS core, Express platform
- **`tsconfig.json`** - TypeScript config (strict mode, ES2023)
- **`nest-cli.json`** - Nest CLI configuration
- **`eslint.config.mjs`** - ESLint configuration
- **`README.md`** - Default NestJS README

#### Source Code (`backend/src/`)
- **`main.ts`** - Application entry point (listens on port 3000)
  ```typescript
  import { NestFactory } from '@nestjs/core';
  import { AppModule } from './app.module';
  
  async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(process.env.PORT ?? 3000);
  }
  bootstrap();
  ```

- **`app.module.ts`** - Root module
  ```typescript
  import { Module } from '@nestjs/common';
  import { AppController } from './app.controller';
  import { AppService } from './app.service';
  
  @Module({
    imports: [],
    controllers: [AppController],
    providers: [AppService],
  })
  export class AppModule {}
  ```

- **`app.controller.ts`** - Default controller (GET / returns "Hello World!")
  ```typescript
  import { Controller, Get } from '@nestjs/common';
  import { AppService } from './app.service';
  
  @Controller()
  export class AppController {
    constructor(private readonly appService: AppService) {}
  
    @Get()
    getHello(): string {
      return this.appService.getHello();
    }
  }
  ```

- **`app.service.ts`** - Default service
  ```typescript
  import { Injectable } from '@nestjs/common';
  
  @Injectable()
  export class AppService {
    getHello(): string {
      return 'Hello World!';
    }
  }
  ```

- **`entities/`** - **EMPTY** (entity files were deleted)

#### Tests (`backend/test/`)
- **`app.e2e-spec.ts`** - E2E test for AppController
- **`jest-e2e.json`** - Jest E2E configuration

---

## 🎨 Frontend (Next.js)

### Current Files

#### Source Code (`frontend/src/app/`)
- **`categories/[slug]/page.tsx`** - Category product grid page
  - Displays mock products in a grid
  - Supports pagination via searchParams (page, limit)
  - Links to product detail pages
  - Uses Tailwind CSS for styling

#### Missing Files (were deleted)
- `layout.tsx` - Root layout with header/footer
- `globals.css` - Global styles
- `page.tsx` - Landing/home page
- `about/page.tsx` - About/README page
- `headings/[slug]/page.tsx` - Navigation heading drilldown
- `products/[slug]/page.tsx` - Product detail page
- Configuration files: `package.json`, `next.config.mjs`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.mjs`

---

## 📋 What Needs to Be Built

### Backend Requirements
1. **Database Setup**
   - PostgreSQL/MongoDB connection (TypeORM/Prisma)
   - Entity definitions:
     - `Navigation` (id, title, slug, lastScrapedAt)
     - `Category` (id, navigationId, parentId, title, slug, productCount, lastScrapedAt)
     - `Product` (id, sourceId, title, price, currency, imageUrl, sourceUrl, lastScrapedAt)
     - `ProductDetail` (productId FK, description, specs JSON, ratingsAvg, reviewsCount)
     - `Review` (id, productId, author, rating, text, createdAt)
     - `ScrapeJob` (id, targetUrl, targetType, status, startedAt, finishedAt, errorLog)
     - `ViewHistory` (id, userId, sessionId, pathJson, createdAt)

2. **Scraping Service**
   - Crawlee + Playwright integration
   - Scrape World of Books (https://www.worldofbooks.com/)
   - Extract: navigation headings, categories, products, product details, reviews
   - Rate limiting, caching, deduplication
   - Queue system for long-running scrapes

3. **REST API Endpoints**
   - `GET /api/navigations` - List navigation headings
   - `GET /api/navigations/:slug` - Get categories for a heading
   - `GET /api/categories/:slug` - Get products in category (with pagination)
   - `GET /api/products/:slug` - Get product details
   - `POST /api/scrape/navigation` - Trigger navigation scrape
   - `POST /api/scrape/category/:slug` - Trigger category scrape
   - `POST /api/scrape/product/:slug` - Trigger product detail scrape
   - `GET /api/history` - Get browsing history

4. **Features**
   - DTO validation (class-validator)
   - Error handling & logging
   - CORS configuration
   - Rate limiting middleware
   - Resource cleanup

### Frontend Requirements
1. **Pages**
   - Landing page (`page.tsx`) - Show navigation headings
   - Heading drilldown (`headings/[slug]/page.tsx`) - Show categories
   - Category grid (`categories/[slug]/page.tsx`) - ✅ EXISTS (needs API integration)
   - Product detail (`products/[slug]/page.tsx`) - Show full product info, reviews, recommendations
   - About page (`about/page.tsx`) - Project info

2. **Components**
   - Navigation header
   - Product card
   - Pagination component
   - Loading skeletons
   - Error boundaries

3. **Data Fetching**
   - SWR or React Query setup
   - API client configuration
   - Client-side caching
   - History persistence (localStorage + backend)

4. **Styling**
   - Tailwind CSS configuration
   - Responsive design (mobile + desktop)
   - WCAG AA accessibility
   - Smooth transitions

5. **Configuration**
   - `package.json` with dependencies
   - `next.config.mjs`
   - `tsconfig.json`
   - `tailwind.config.ts`
   - `postcss.config.mjs`

---

## 🚀 Current Status

- ✅ Backend: Basic NestJS scaffold
- ✅ Frontend: One category page exists (mock data)
- ❌ Backend: No database, no scraping, no API endpoints
- ❌ Frontend: Missing most pages and configuration
- ❌ Both: Need full implementation per requirements

---

## 📝 Next Steps

1. Recreate deleted frontend files
2. Set up database (PostgreSQL recommended)
3. Create all entity definitions
4. Implement scraping service with Crawlee + Playwright
5. Build REST API endpoints
6. Connect frontend to backend APIs
7. Add data fetching (SWR/React Query)
8. Implement caching and history persistence
9. Add error handling and loading states
10. Deploy both frontend and backend

---

## 🔗 Key Technologies

- **Backend**: NestJS, TypeScript, TypeORM, PostgreSQL, Crawlee, Playwright
- **Frontend**: Next.js 15 (App Router), React, TypeScript, Tailwind CSS, SWR/React Query
