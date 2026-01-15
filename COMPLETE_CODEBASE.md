# Complete Codebase - All Source Files

## 📁 Project Structure
```
Data_Extraction/
├── backend/          # NestJS Backend
│   └── src/
└── frontend/         # Next.js Frontend
    └── src/app/
```

---

## 🔧 BACKEND CODE

### 1. `backend/src/main.ts` - Application Entry Point
```typescript
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
```

### 2. `backend/src/app.module.ts` - Root Module
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

### 3. `backend/src/app.controller.ts` - API Controller
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

### 4. `backend/src/app.service.ts` - Business Logic Service
```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
```

### 5. `backend/src/app.controller.spec.ts` - Unit Tests
```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
```

### 6. `backend/test/app.e2e-spec.ts` - E2E Tests
```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
```

### 7. `backend/package.json` - Dependencies & Scripts
```json
{
  "name": "backend",
  "version": "0.0.1",
  "description": "",
  "author": "",
  "private": true,
  "license": "UNLICENSED",
  "scripts": {
    "build": "nest build",
    "format": "prettier --write \"src/**/*.ts\" \"test/**/*.ts\"",
    "start": "nest start",
    "start:dev": "nest start --watch",
    "start:debug": "nest start --debug --watch",
    "start:prod": "node dist/main",
    "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:cov": "jest --coverage",
    "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
    "test:e2e": "jest --config ./test/jest-e2e.json"
  },
  "dependencies": {
    "@nestjs/common": "^11.0.1",
    "@nestjs/core": "^11.0.1",
    "@nestjs/platform-express": "^11.0.1",
    "reflect-metadata": "^0.2.2",
    "rxjs": "^7.8.1"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3.2.0",
    "@eslint/js": "^9.18.0",
    "@nestjs/cli": "^11.0.0",
    "@nestjs/schematics": "^11.0.0",
    "@nestjs/testing": "^11.0.1",
    "@types/express": "^5.0.0",
    "@types/jest": "^30.0.0",
    "@types/node": "^22.10.7",
    "@types/supertest": "^6.0.2",
    "eslint": "^9.18.0",
    "eslint-config-prettier": "^10.0.1",
    "eslint-plugin-prettier": "^5.2.2",
    "globals": "^16.0.0",
    "jest": "^30.0.0",
    "prettier": "^3.4.2",
    "source-map-support": "^0.5.21",
    "supertest": "^7.0.0",
    "ts-jest": "^29.2.5",
    "ts-loader": "^9.5.2",
    "ts-node": "^10.9.2",
    "tsconfig-paths": "^4.2.0",
    "typescript": "^5.7.3",
    "typescript-eslint": "^8.20.0"
  },
  "jest": {
    "moduleFileExtensions": [
      "js",
      "json",
      "ts"
    ],
    "rootDir": "src",
    "testRegex": ".*\\.spec\\.ts$",
    "transform": {
      "^.+\\.(t|j)s$": "ts-jest"
    },
    "collectCoverageFrom": [
      "**/*.(t|j)s"
    ],
    "coverageDirectory": "../coverage",
    "testEnvironment": "node"
  }
}
```

### 8. `backend/tsconfig.json` - TypeScript Configuration
```json
{
  "compilerOptions": {
    "module": "nodenext",
    "moduleResolution": "nodenext",
    "resolvePackageJsonExports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "declaration": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "target": "ES2023",
    "sourceMap": true,
    "outDir": "./dist",
    "baseUrl": "./",
    "incremental": true,
    "skipLibCheck": true,
    "strictNullChecks": true,
    "forceConsistentCasingInFileNames": true,
    "noImplicitAny": true,
    "strictBindCallApply": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

### 9. `backend/nest-cli.json` - Nest CLI Configuration
```json
{
  "$schema": "https://json.schemastore.org/nest-cli",
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "compilerOptions": {
    "deleteOutDir": true
  }
}
```

---

## 🎨 FRONTEND CODE

### 1. `frontend/src/app/categories/[slug]/page.tsx` - Category Product Grid Page
```typescript
import Link from "next/link";

interface CategoryPageProps {
  params: { slug: string };
  searchParams: { page?: string; limit?: string };
}

const mockProducts = Array.from({ length: 12 }).map((_, idx) => ({
  id: `product-${idx + 1}`,
  title: `Sample Book Title ${idx + 1}`,
  author: "Author Name",
  price: (4.99 + idx).toFixed(2),
  currency: "GBP",
  imageUrl: "https://via.placeholder.com/200x280.png?text=Book",
  slug: `sample-book-${idx + 1}`
}));

export default function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { slug } = params;
  const page = Number(searchParams.page ?? "1");
  const limit = Number(searchParams.limit ?? "12");

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-8">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.18em] text-brand-300">
          Category
        </p>
        <h1 className="text-2xl font-semibold tracking-tight">
          {slug.replace(/-/g, " ")}
        </h1>
        <p className="max-w-xl text-sm text-slate-300">
          This page will be powered by a paged product grid backed by on-demand scraping and caching
          for the selected category.
        </p>
      </header>

      <section className="space-y-4">
        <div className="flex items-center justify-between gap-3 text-xs text-slate-400">
          <span>
            Showing page <span className="font-semibold text-slate-100">{page}</span>{" "}
            with limit <span className="font-semibold text-slate-100">{limit}</span>
          </span>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Live grid will support server-side pagination & caching
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {mockProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 hover:border-brand-500/70 hover:bg-slate-900/90 transition-colors"
            >
              <div className="aspect-[3/4] bg-slate-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-1 px-3 py-3">
                <p className="line-clamp-2 text-xs font-semibold text-slate-100">
                  {product.title}
                </p>
                <p className="text-[11px] text-slate-400">{product.author}</p>
                <p className="mt-auto text-sm font-semibold text-brand-200">
                  {product.currency} {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
```

---

## 📊 Summary

### Backend Files (9 files)
- ✅ `main.ts` - Entry point
- ✅ `app.module.ts` - Root module
- ✅ `app.controller.ts` - Controller
- ✅ `app.service.ts` - Service
- ✅ `app.controller.spec.ts` - Unit tests
- ✅ `package.json` - Dependencies
- ✅ `tsconfig.json` - TypeScript config
- ✅ `nest-cli.json` - Nest CLI config
- ✅ `test/app.e2e-spec.ts` - E2E tests

### Frontend Files (1 file)
- ✅ `categories/[slug]/page.tsx` - Category page

### Missing Files
- ❌ Frontend: `layout.tsx`, `page.tsx`, `about/page.tsx`, `headings/[slug]/page.tsx`, `products/[slug]/page.tsx`, config files
- ❌ Backend: Entity files, scraping service, API endpoints, database setup

---

## 🚀 Next Steps

To complete the project, you need to:
1. Create missing frontend pages and configuration
2. Set up database (PostgreSQL/MongoDB)
3. Create entity definitions
4. Implement scraping service with Crawlee + Playwright
5. Build REST API endpoints
6. Connect frontend to backend APIs
