"use client";

import * as React from "react";
import { PlayingCardCard } from "../cards/playing-card-card";
import { PlayingCardData } from "@/types/playing-card/playing-card-type";
import { PlayingCardListSkeleton } from "../skeletons/lists/playing-card-list-skeleton";
import { useInfiniteTcgCards } from "@/hooks/fetch/pokemon-tcg-card-hook";
import { Grid } from "../layout/grid/grid";

export function PlayingCardList() {
  const { data, isLoading, error, ref, hasNextPage, isFetchingNextPage } =
    useInfiniteTcgCards();

  if (isLoading)
    return (
      <Grid cols={1} colsSm={2} colsMd={2} colsLg={4} gap={4}>
        <PlayingCardListSkeleton />
      </Grid>
    );
  if (error) return <div>Une erreur est survenue</div>;
  return (
    <Grid cols={1} colsSm={2} colsMd={2} colsLg={4} gap={4}>
      {data?.pages.map((cards, i) => (
        <React.Fragment key={i}>
          {cards.map((card: PlayingCardData) => (
            <PlayingCardCard key={card.id} card={card} />
          ))}
        </React.Fragment>
      ))}
      {isFetchingNextPage && hasNextPage && <PlayingCardListSkeleton />}
      <div ref={ref}></div>
    </Grid>
  );
}
