"use client";

import * as React from "react";
import { PlayingCardCardSkeleton } from "./cards/playing-card-card-skeleton";

export function PlayingCardListSkeleton() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => (
        <PlayingCardCardSkeleton key={index} />
      ))}
    </>
  );
}
