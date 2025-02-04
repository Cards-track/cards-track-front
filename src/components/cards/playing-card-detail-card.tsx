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
import { useQuery } from "@tanstack/react-query";
import { PokemonTcgCardsService } from "@/services/api-services/pokemon-tcg-cards-service";
import { useParams } from "next/navigation";

export type PlayingCardDetailCardProps = {
  className: string;
};

export function PlayingCardDetailCard({
  className,
}: PlayingCardDetailCardProps) {
  const { id } = useParams();
  const [imageError, setImageError] = React.useState(false);
  const fallbackImageUrl = "/images/card-placeholder-small.png";

  const {
    data: card,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["card-detail", id],
    queryFn: async () => {
      const response = await PokemonTcgCardsService.fetchCardDetails(
        id as string
      );
      console.log("RESPONSE", response);
      return PokemonTcgCardsService.mapCardDetailResponse(response);
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occured</div>;

  return (
    <>
      {card && (
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
      )}
    </>
  );
}
