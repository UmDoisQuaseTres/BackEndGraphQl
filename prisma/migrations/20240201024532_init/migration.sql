-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "public" BOOLEAN NOT NULL,
    "task" TEXT NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);
