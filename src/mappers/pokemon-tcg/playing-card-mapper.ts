import {
  PlayingCardData,
  PlayingCardDetailData,
} from "@/types/playing-card/playing-card-type";
import {
  ApiCard,
  ApiCardDetailReponse,
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

  static mapCardDetailData = (
    response: ApiCardDetailReponse
  ): PlayingCardDetailData => {
    return {
      id: response.data.id,
      name: response.data.name,
      images: {
        small: response.data.images.small,
        large: response.data.images.large,
      },
      set: { name: response.data.set.name },
      rarity: response.data.rarity,
      artist: response.data.artist,
    };
  };
}
