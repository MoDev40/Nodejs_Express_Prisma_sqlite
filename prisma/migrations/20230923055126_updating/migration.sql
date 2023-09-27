/*
  Warnings:

  - You are about to alter the column `rate` on the `Rating` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Rating" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "rate" REAL NOT NULL,
    "comment" TEXT,
    "crated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "restId" INTEGER NOT NULL,
    CONSTRAINT "Rating_restId_fkey" FOREIGN KEY ("restId") REFERENCES "Restrurents" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Rating" ("comment", "crated", "id", "rate", "restId", "updated") SELECT "comment", "crated", "id", "rate", "restId", "updated" FROM "Rating";
DROP TABLE "Rating";
ALTER TABLE "new_Rating" RENAME TO "Rating";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
