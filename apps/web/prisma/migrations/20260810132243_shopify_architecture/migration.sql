/*
  Warnings:

  - You are about to drop the column `websiteTemplateId` on the `Website` table. All the data in the column will be lost.
  - You are about to drop the column `settings` on the `WebsiteBlock` table. All the data in the column will be lost.
  - You are about to drop the column `websiteId` on the `WebsiteBlock` table. All the data in the column will be lost.
  - You are about to drop the column `previewImage` on the `WebsiteTemplate` table. All the data in the column will be lost.
  - Added the required column `sectionId` to the `WebsiteBlock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `settings` to the `WebsiteTemplate` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "ThemeSetting" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "websiteId" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" JSONB NOT NULL,
    CONSTRAINT "ThemeSetting_websiteId_fkey" FOREIGN KEY ("websiteId") REFERENCES "Website" ("id") ON DELETE CASCADE ON UPDATE CASCADE
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
    "published" BOOLEAN NOT NULL DEFAULT false,
    "primaryColor" TEXT NOT NULL DEFAULT '#f97316',
    "secondaryColor" TEXT NOT NULL DEFAULT '#171717',
    "accentColor" TEXT NOT NULL DEFAULT '#ffffff',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Website_businessId_fkey" FOREIGN KEY ("businessId") REFERENCES "Business" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Website_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "WebsiteTemplate" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Website" ("accentColor", "businessId", "createdAt", "id", "primaryColor", "published", "secondaryColor", "slug", "title", "updatedAt") SELECT "accentColor", "businessId", "createdAt", "id", "primaryColor", "published", "secondaryColor", "slug", "title", "updatedAt" FROM "Website";
DROP TABLE "Website";
ALTER TABLE "new_Website" RENAME TO "Website";
CREATE UNIQUE INDEX "Website_businessId_key" ON "Website"("businessId");
CREATE UNIQUE INDEX "Website_slug_key" ON "Website"("slug");
CREATE TABLE "new_WebsiteBlock" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sectionId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "position" INTEGER NOT NULL,
    CONSTRAINT "WebsiteBlock_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "WebsiteSection" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_WebsiteBlock" ("content", "id", "position", "type") SELECT "content", "id", "position", "type" FROM "WebsiteBlock";
DROP TABLE "WebsiteBlock";
ALTER TABLE "new_WebsiteBlock" RENAME TO "WebsiteBlock";
CREATE TABLE "new_WebsiteTemplate" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "preview" TEXT,
    "settings" JSONB NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_WebsiteTemplate" ("category", "createdAt", "id", "name") SELECT "category", "createdAt", "id", "name" FROM "WebsiteTemplate";
DROP TABLE "WebsiteTemplate";
ALTER TABLE "new_WebsiteTemplate" RENAME TO "WebsiteTemplate";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
