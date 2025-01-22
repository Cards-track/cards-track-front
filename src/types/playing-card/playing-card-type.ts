export type PlayingCardData = {
  id: string;
  name: string;
  images: {
    small: string;
  };
  rarity: string;
  set: {
    name: string;
  };
  tcgplayer: {
    prices: {
      lowestMarket: number | null;
    };
  };
};
