"use client";

import * as React from "react";
import { ApiCardReponse } from "@/types/pokemon-tcg/playing-card-type";
import { PlayinCardTcgMapper } from "@/mappers/pokemon-tcg/playing-card-mapper";
import { Grid } from "../layout/grid/grid";
import { PlayingCardCard } from "../cards/playing-card-card";
import { PlayingCardData } from "@/types/playing-card/playing-card-type";
import { useQuery } from "@tanstack/react-query";

const fetchCards = async (): Promise<PlayingCardData[]> => {
  // Pour une vraie API, utilisez :
  const response = await fetch(
    "https://api.pokemontcg.io/v2/cards?q=name:charizard&pageSize=100&select=id,name,rarity,set,tcgplayer,images",
    {
      headers: {
        "X-Api-Key": process.env.NEXT_PUBLIC_POKEMON_TCG_API_KEY ?? "",
      },
    }
  );

  const result = (await response.json()) as ApiCardReponse;
  return PlayinCardTcgMapper.mapCardData(result);
};

export function PlayingCardList() {
  const { data, isLoading, error } = useQuery<PlayingCardData[]>({
    queryKey: ["cards"],
    queryFn: fetchCards,
  });

  if (isLoading) return <div>Chargement...</div>;
  if (error) return <div>Une erreur est survenue</div>;
  return (
    <Grid cols="5" gap="4">
      {data?.map((card: PlayingCardData) => (
        <PlayingCardCard key={card.id} card={card} />
      ))}
    </Grid>
  );
}
