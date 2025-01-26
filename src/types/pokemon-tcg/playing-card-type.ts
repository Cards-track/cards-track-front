// Fonction utilitaire pour trouver le prix le plus bas
type PriceVariant = {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow: number | null;
};

// Interface pour les images
interface ApiCardImages {
  small: string;
  large: string;
}

interface ApiSetImages {
  symbol: string;
  logo: string;
}

// Interface pour le set
interface ApiCardSet {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  legalities: any;
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: ApiSetImages;
}

// Interface principale pour une carte Pokémon
interface ApiCard {
  id: string;
  name: string;
  set: ApiCardSet;
  rarity: string;
  images: ApiCardImages;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tcgplayer?: any;
}

interface ApiCardReponse {
  data: ApiCard[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}

interface CardFilter {
  name: string;
  sets: string[];
  rarities: string[];
  types: string[];
}

export type { ApiCard, ApiCardReponse, PriceVariant, CardFilter };
