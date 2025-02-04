import { KpiIconTypeEnum, KpiTypeEnum } from "../enums/playing-card-kpi-enum";

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

export type PlayingCardKpiData = {
  id: string;
  title: string;
  value: number;
  type: KpiTypeEnum;
  iconType: KpiIconTypeEnum;
};
