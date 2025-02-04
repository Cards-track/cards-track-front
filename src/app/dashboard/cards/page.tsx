"use client";

import FiltersCardHeader from "@/components/headers/filters-card-header";
import { PlayingCardList } from "@/components/lists/playing-card-list";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <Suspense>
        <FiltersCardHeader />
        <PlayingCardList />
      </Suspense>
    </div>
  );
}
