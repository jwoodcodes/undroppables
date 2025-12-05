-- Run this SQL directly in your Supabase SQL Editor to add the column
-- Go to: Supabase Dashboard > SQL Editor > New Query

ALTER TABLE "UNScorePlayer" ADD COLUMN IF NOT EXISTS "unScorePercentile" DOUBLE PRECISION;
