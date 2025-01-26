"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function FiltersCardHeaderSkeleton() {
  return (
    <div className="flex items-center gap-4 rounded-lg border bg-card p-4">
      <Skeleton className="h-9 w-4/5 rounded-md animate-pulse" />
      <Skeleton className="h-9 w-1/5 rounded-md animate-pulse" />
      <Skeleton className="h-9 w-1/5 rounded-md animate-pulse" />
      <Skeleton className="h-9 w-1/5 rounded-md animate-pulse" />
    </div>
  );
}
