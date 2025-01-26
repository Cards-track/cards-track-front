"use client";

import { Grid } from "@/components/layout/grid/grid";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const card = {
  id: "dp3-1",
  name: "Ampharos",
  supertype: "Pokémon",
  subtypes: ["Stage 2"],
  level: "52",
  hp: "130",
  types: ["Lightning"],
  evolvesFrom: "Flaaffy",
  abilities: [
    {
      name: "Jamming",
      text: "After your opponent plays a Supporter card from his or her hand, put 1 damage counter on each of your opponent's Pokémon. You can't use more than 1 Jamming Poké-Body each turn.",
      type: "Poké-Body",
    },
  ],
  attacks: [
    {
      name: "Cluster Bolt",
      cost: ["Lightning", "Colorless", "Colorless"],
      convertedEnergyCost: 3,
      damage: "70",
      text: "You may discard all Lightning Energy attached to Ampharos. If you do, this attack does 20 damage to each of your opponent's Benched Pokémon that has any Energy cards attached to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
    },
  ],
  weaknesses: [
    {
      type: "Fighting",
      value: "+30",
    },
  ],
  resistances: [
    {
      type: "Metal",
      value: "-20",
    },
  ],
  retreatCost: ["Colorless", "Colorless", "Colorless"],
  convertedRetreatCost: 3,
  set: {
    id: "dp3",
    name: "Secret Wonders",
    series: "Diamond & Pearl",
    printedTotal: 132,
    total: 132,
    legalities: {
      unlimited: "Legal",
    },
    ptcgoCode: "SW",
    releaseDate: "2007/11/01",
    updatedAt: "2018/03/04 10:35:00",
    images: {
      symbol: "https://images.pokemontcg.io/dp3/symbol.png",
      logo: "https://images.pokemontcg.io/dp3/logo.png",
    },
  },
  number: "1",
  artist: "Kouki Saitou",
  rarity: "Rare Holo",
  flavorText:
    "The tip of its tail shines brightly. In the olden days, people sent signals using the tail's light.",
  nationalPokedexNumbers: [181],
  legalities: {
    unlimited: "Legal",
  },
  images: {
    small: "https://images.pokemontcg.io/dp3/1.png",
    large: "https://images.pokemontcg.io/dp3/1_hires.png",
  },
  tcgplayer: {
    url: "https://prices.pokemontcg.io/tcgplayer/dp3-1",
    updatedAt: "2025/01/26",
    prices: {
      holofoil: {
        low: 5.61,
        mid: 11.67,
        high: 44.99,
        market: 14.75,
        directLow: null,
      },
      reverseHolofoil: {
        low: 4.64,
        mid: 8.39,
        high: 11.97,
        market: 9.32,
        directLow: null,
      },
    },
  },
  cardmarket: {
    url: "https://prices.pokemontcg.io/cardmarket/dp3-1",
    updatedAt: "2025/01/26",
    prices: {
      averageSellPrice: 1.59,
      lowPrice: 0.1,
      trendPrice: 1.43,
      germanProLow: 0.0,
      suggestedPrice: 0.0,
      reverseHoloSell: 3.98,
      reverseHoloLow: 0.29,
      reverseHoloTrend: 2.32,
      lowPriceExPlus: 1.0,
      avg1: 1.0,
      avg7: 2.04,
      avg30: 1.68,
      reverseHoloAvg1: 2.95,
      reverseHoloAvg7: 2.92,
      reverseHoloAvg30: 2.56,
    },
  },
};

export default function CardDetailPage() {
  const { id } = useParams();
  const [imageError, setImageError] = React.useState(false);
  const fallbackImageUrl = "/images/card-placeholder-small.png"; // À créer

  // if (isLoading) return <div>Chargement...</div>;
  // if (error) return <div>Erreur de chargement</div>;
  // if (!card) return <div>Carte non trouvée</div>;

  return (
    <Grid cols={1} colsSm={2} colsMd={2} colsLg={5} gap={4}>
      <Card className="col-span-2 row-span-3">
        <CardHeader>
          <CardTitle>{card.name}</CardTitle>
          <CardDescription>{card.set.name}</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Image
            src={imageError ? fallbackImageUrl : card.images.small}
            alt={card.name}
            width={200 * 1.5}
            height={280 * 1.5}
            onError={() => setImageError(true)}
            className="rounded-xl object-contain"
            priority={false}
          />
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 font-medium leading-none">
                {card.artist}
              </div>
              <div className="flex items-center gap-2 leading-none text-muted-foreground">
                {card.rarity}
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>

      <Card className="col-span-3 row-span-2"></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </Grid>
  );
}
