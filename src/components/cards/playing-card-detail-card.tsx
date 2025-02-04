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
import Image from "next/image";
import { PlayingCardDetailData } from "@/types/playing-card/playing-card-type";

export type PlayingCardDetailCardProps = {
  card: PlayingCardDetailData;
  className: string;
};

export function PlayingCardDetailCard({
  card,
  className,
}: PlayingCardDetailCardProps) {
  const [imageError, setImageError] = React.useState(false);
  const fallbackImageUrl = "/images/card-placeholder-small.png"; // À créer

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{card.name}</CardTitle>
        <CardDescription>{card.set.name}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <Image
          src={imageError ? fallbackImageUrl : card.images.large}
          alt={card.name}
          width={200 * 1.5}
          height={280 * 1.5}
          onError={() => setImageError(true)}
          className="rounded-lg object-contain"
          priority={false}
        />
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Illustrate by {card.artist}
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
