"use client";

import * as React from "react";
// import { ApiCardReponse } from "@/types/pokemon-tcg/playing-card-type";
import { Grid } from "../layout/grid/grid";
import { PlayingCardCard } from "../cards/playing-card-card";
import { PlayingCardData } from "@/types/playing-card/playing-card-type";
// import { useInView } from "react-intersection-observer";
// import { useInfiniteQuery } from "@tanstack/react-query";
// import { PlayinCardTcgMapper } from "@/mappers/pokemon-tcg/playing-card-mapper";
import { PlayingCardListSkeleton } from "../skeletons/lists/playing-card-list-skeleton";
import { useInfiniteTcgCards } from "@/hooks/pokemon-tcg-card-hook";

export function PlayingCardList() {
  const { data, isLoading, error, ref, hasNextPage, isFetchingNextPage } =
    useInfiniteTcgCards();

  if (isLoading)
    return (
      <Grid cols="5" gap="4">
        <PlayingCardListSkeleton />
      </Grid>
    );
  if (error) return <div>Une erreur est survenue</div>;
  return (
    <Grid cols="5" gap="4">
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
