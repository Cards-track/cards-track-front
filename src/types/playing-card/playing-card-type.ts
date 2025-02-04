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

export type PlayingCardDetailData = {
  id: string;
  name: string;
  images: {
    small: string;
    large: string;
  };
  rarity: string;
  set: {
    name: string;
  };
  artist: string;
};
