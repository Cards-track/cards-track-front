"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { TrendingUp } from "lucide-react";
import Image from "next/image";
import { PlayingCardData } from "@/types/playing-card/playing-card-type";

export type PlayingCardCardProps = {
  card: PlayingCardData;
};

export function PlayingCardCard({ card }: PlayingCardCardProps) {
  const [imageError, setImageError] = React.useState(false);
  const fallbackImageUrl = "/images/card-placeholder-small.png"; // À créer

  return (
    <Card>
      <CardHeader>
        <CardTitle>{card.name}</CardTitle>
        <CardDescription>{card.set.name}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <Image
          src={imageError ? fallbackImageUrl : card.images.small}
          alt={card.name}
          width={200}
          height={280}
          onError={() => setImageError(true)}
          className="rounded-lg object-contain"
          priority={false}
        />
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              {card.tcgplayer?.prices?.lowestMarket ? (
                <>
                  Willing price
                  <span className="text-accent-foreground text-green-700">
                    {`$${card.tcgplayer?.prices?.lowestMarket}`}
                  </span>
                  <TrendingUp className="h-4 w-4 text-green-700" />
                </>
              ) : (
                <>Price informations not available</>
              )}
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              {card.rarity}
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
