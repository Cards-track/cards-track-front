"use client";

import * as React from "react";
import { ApiCardReponse } from "@/types/pokemon-tcg/playing-card-type";
import { Grid } from "../layout/grid/grid";
import { PlayingCardCard } from "../cards/playing-card-card";
import { PlayingCardData } from "@/types/playing-card/playing-card-type";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { PlayinCardTcgMapper } from "@/mappers/pokemon-tcg/playing-card-mapper";
import { PlayingCardListSkeleton } from "../skeletons/lists/playing-card-list-skeleton";

const fetchCards = async ({
  pageParam,
}: {
  pageParam: number;
}): Promise<ApiCardReponse> => {
  // Pour une vraie API, utilisez :
  const response = await fetch(
    `https://api.pokemontcg.io/v2/cards?q=name:charizard&page=${pageParam}&pageSize=10&select=id,name,rarity,set,tcgplayer,images`,
    {
      headers: {
        "X-Api-Key": process.env.NEXT_PUBLIC_POKEMON_TCG_API_KEY ?? "",
      },
    }
  );
  return await response.json();
};

export function PlayingCardList() {
  const { ref, inView } = useInView({
    threshold: 0.5, // Déclencher plus tôt
  });

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["cards"],
    queryFn: fetchCards,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.data.length === 0) return undefined;
      return allPages.length + 1;
    },
    select: (data) => {
      return {
        pages: data.pages.map((page) => PlayinCardTcgMapper.mapCardData(page)),
        pageParams: data.pageParams,
      };
    },
  });

  React.useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

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
