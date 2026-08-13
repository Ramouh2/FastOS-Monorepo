/*
  Warnings:

  - Added the required column `settings` to the `WebsiteBlock` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN "description" TEXT;
ALTER TABLE "Product" ADD COLUMN "image" TEXT;

-- CreateTable
CREATE TABLE "WebsitePage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "websiteId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "position" INTEGER NOT NULL DEFAULT 1,
    "published" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "WebsitePage_websiteId_fkey" FOREIGN KEY ("websiteId") REFERENCES "Website" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Website" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "businessId" TEXT NOT NULL,
    "templateId" TEXT,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "config" JSONB,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "primaryColor" TEXT NOT NULL DEFAULT '#f97316',
    "secondaryColor" TEXT NOT NULL DEFAULT '#171717',
    "accentColor" TEXT NOT NULL DEFAULT '#ffffff',
    "fontFamily" TEXT DEFAULT 'Inter',
    "borderRadius" INTEGER NOT NULL DEFAULT 16,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Website_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Website_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "WebsiteTemplate" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Website" ("accentColor", "businessId", "createdAt", "id", "primaryColor", "published", "secondaryColor", "slug", "templateId", "title", "updatedAt") SELECT "accentColor", "businessId", "createdAt", "id", "primaryColor", "published", "secondaryColor", "slug", "templateId", "title", "updatedAt" FROM "Website";
DROP TABLE "Website";
ALTER TABLE "new_Website" RENAME TO "Website";
CREATE UNIQUE INDEX "Website_businessId_key" ON "Website"("businessId");
CREATE UNIQUE INDEX "Website_slug_key" ON "Website"("slug");
CREATE TABLE "new_WebsiteBlock" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sectionId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "content" JSONB NOT NULL,
    "settings" JSONB NOT NULL,
    CONSTRAINT "WebsiteBlock_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "WebsiteSection" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_WebsiteBlock" ("content", "id", "position", "sectionId", "type") SELECT "content", "id", "position", "sectionId", "type" FROM "WebsiteBlock";
DROP TABLE "WebsiteBlock";
ALTER TABLE "new_WebsiteBlock" RENAME TO "WebsiteBlock";
CREATE INDEX "WebsiteBlock_sectionId_idx" ON "WebsiteBlock"("sectionId");
CREATE TABLE "new_WebsiteSection" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "websiteId" TEXT NOT NULL,
    "pageId" TEXT,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "visible" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "WebsiteSection_websiteId_fkey" FOREIGN KEY ("websiteId") REFERENCES "Website" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "WebsiteSection_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "WebsitePage" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_WebsiteSection" ("content", "createdAt", "id", "position", "title", "type", "updatedAt", "visible", "websiteId") SELECT "content", "createdAt", "id", "position", "title", "type", "updatedAt", "visible", "websiteId" FROM "WebsiteSection";
DROP TABLE "WebsiteSection";
ALTER TABLE "new_WebsiteSection" RENAME TO "WebsiteSection";
CREATE INDEX "WebsiteSection_websiteId_idx" ON "WebsiteSection"("websiteId");
CREATE INDEX "WebsiteSection_pageId_idx" ON "WebsiteSection"("pageId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE INDEX "WebsitePage_websiteId_idx" ON "WebsitePage"("websiteId");

-- CreateIndex
CREATE INDEX "ThemeSetting_websiteId_idx" ON "ThemeSetting"("websiteId");
