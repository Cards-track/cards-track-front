import { PlayingCardData } from "@/types/playing-card/playing-card-type";
import {
  ApiCard,
  ApiCardReponse,
  PriceVariant,
} from "@/types/pokemon-tcg/playing-card-type";

export class PlayinCardTcgMapper {
  static mapCardData = (response: ApiCardReponse): PlayingCardData[] => {
    return response.data.map(
      (item: ApiCard): PlayingCardData => ({
        id: item.id,
        name: item.name,
        images: {
          small: item.images?.small ?? "",
        },
        set: { name: item.set.name },
        rarity: item.rarity ?? "Rarity unknown",
        tcgplayer: {
          prices: {
            lowestMarket: this.getLowestMarketPrice(item.tcgplayer?.prices),
          },
        },
      })
    );
  };

  static getLowestMarketPrice = (
    prices: Record<string, PriceVariant>
  ): number | null => {
    if (!prices) return null;

    const marketPrices = Object.values(prices)
      .map((variant: PriceVariant) => variant.market)
      .filter((price): price is number => price !== undefined);

    return marketPrices.length > 0 ? Math.min(...marketPrices) : null;
  };
}
