"use client";

import * as React from "react";
import { ApiCardReponse } from "@/types/pokemon-tcg/playing-card-type";
import cardsData from "@/dataset/pokemon-tcg/card-data-set.json";
import { PlayinCardTcgMapper } from "@/mappers/pokemon-tcg/playing-card-mapper";
import { Grid } from "../layout/grid/grid";
import { PlayingCardCard } from "../cards/playing-card-card";
import { PlayingCardData } from "@/types/playing-card/playing-card-type";

const REAL_DATA: ApiCardReponse = cardsData;

const CARD_DATA = PlayinCardTcgMapper.mapCardData(REAL_DATA.data);

export function PlayingCardList() {
  return (
    <Grid cols="5" gap="4">
      {CARD_DATA.map((card: PlayingCardData) => (
        <PlayingCardCard key={card.id} card={card} />
      ))}
    </Grid>
  );
}
