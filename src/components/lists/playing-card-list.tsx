"use client";

import * as React from "react";
import { ApiCardReponse } from "@/types/pokemon-tcg/playing-card-type";
import { Grid } from "../layout/grid/grid";
import { PlayingCardCard } from "../cards/playing-card-card";
import { PlayingCardData } from "@/types/playing-card/playing-card-type";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { PlayinCardTcgMapper } from "@/mappers/pokemon-tcg/playing-card-mapper";

const fetchCards = async ({
  pageParam,
}: {
  pageParam: number;
}): Promise<ApiCardReponse> => {
  // Pour une vraie API, utilisez :
  const response = await fetch(
    `https://api.pokemontcg.io/v2/cards?page=${pageParam}&pageSize=20&select=id,name,rarity,set,tcgplayer,images`,
    {
      headers: {
        "X-Api-Key": process.env.NEXT_PUBLIC_POKEMON_TCG_API_KEY ?? "",
      },
    }
  );
  const data = await response.json();
  console.log("Response data:", data); // Debug log
  return data;
};

export function PlayingCardList() {
  const { ref, inView } = useInView({
    threshold: 0.1, // Déclencher plus tôt
    rootMargin: "100px",
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
      console.log("LastPage:", lastPage);
      console.log("AllPages length:", allPages.length);
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

  if (isLoading) return <div>Chargement...</div>;
  if (error) return <div>Une erreur est survenue</div>;
  return (
    <>
      <Grid cols="5" gap="4">
        {data?.pages.map((cards, i) => (
          <React.Fragment key={i}>
            {cards.map((card: PlayingCardData) => (
              <PlayingCardCard key={card.id} card={card} />
            ))}
          </React.Fragment>
        ))}
      </Grid>

      <div ref={ref} className="w-full h-20 flex items-center justify-center">
        {isFetchingNextPage ? (
          <div>Chargement...</div>
        ) : hasNextPage ? (
          <div>Scrollez pour plus de cartes</div>
        ) : (
          <div>Plus aucune carte à charger</div>
        )}
      </div>
    </>
  );
}
