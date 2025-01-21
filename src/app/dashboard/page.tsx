import { Grid } from "@/components/layout/grid/grid";
import { Input } from "@/components/ui/input";
import { Search, TrendingUp } from "lucide-react";
import Image from "next/image";

const REAL_DATA = {
  data: [
    {
      id: "dp3-3",
      name: "Charizard",
      supertype: "Pokémon",
      subtypes: ["Stage 2"],
      level: "55",
      hp: "130",
      types: ["Fire"],
      evolvesFrom: "Charmeleon",
      abilities: [
        {
          name: "Fury Blaze",
          text: "If your opponent has 3 or less Prize cards left, each of Charizard's attacks does 50 more damage to the Active Pokémon (before applying Weakness and Resistance).",
          type: "Poké-Body",
        },
      ],
      attacks: [
        {
          name: "Blast Burn",
          cost: ["Fire", "Fire", "Fire", "Colorless"],
          convertedEnergyCost: 4,
          damage: "120",
          text: "Flip a coin. If heads, discard 2 Energy cards attached to Charizard. If tails, discard 4 Energy cards attached to Charizard. (If you can't, this attack does nothing.)",
        },
      ],
      weaknesses: [
        {
          type: "Water",
          value: "+40",
        },
      ],
      resistances: [
        {
          type: "Fighting",
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
      number: "3",
      artist: "Daisuke Ito",
      rarity: "Rare Holo",
      flavorText:
        "It is said that CHARIZARD's fire burns hotter if it has experienced harsh battles.",
      nationalPokedexNumbers: [6],
      legalities: {
        unlimited: "Legal",
      },
      images: {
        small: "https://images.pokemontcg.io/dp3/3.png",
        large: "https://images.pokemontcg.io/dp3/3_hires.png",
      },
      tcgplayer: {
        url: "https://prices.pokemontcg.io/tcgplayer/dp3-3",
        updatedAt: "2025/01/20",
        prices: {
          holofoil: {
            low: 79.99,
            mid: 117.61,
            high: 154.1,
            market: 125.03,
            directLow: null,
          },
          reverseHolofoil: {
            low: 36.99,
            mid: 66.55,
            high: 126.16,
            market: 115.0,
            directLow: null,
          },
        },
      },
      cardmarket: {
        url: "https://prices.pokemontcg.io/cardmarket/dp3-3",
        updatedAt: "2025/01/20",
        prices: {
          averageSellPrice: 38.27,
          lowPrice: 4.99,
          trendPrice: 31.66,
          germanProLow: 0.0,
          suggestedPrice: 0.0,
          reverseHoloSell: 14.85,
          reverseHoloLow: 7.0,
          reverseHoloTrend: 13.26,
          lowPriceExPlus: 25.0,
          avg1: 39.99,
          avg7: 35.1,
          avg30: 29.9,
          reverseHoloAvg1: 27.0,
          reverseHoloAvg7: 16.6,
          reverseHoloAvg30: 16.42,
        },
      },
    },
    {
      id: "gym2-2",
      name: "Blaine's Charizard",
      supertype: "Pokémon",
      subtypes: ["Stage 2"],
      level: "50",
      hp: "100",
      types: ["Fire"],
      evolvesFrom: "Blaine's Charmeleon",
      attacks: [
        {
          name: "Roaring Flames",
          cost: ["Fire"],
          convertedEnergyCost: 1,
          damage: "20+",
          text: "Discard all Fire Energy cards attached to Blaine's Charizard. If all Energy cards attached to Blaine's Charizard provide 2 Fire Energy, discard all of them. This attack does 20 damage plus 20 more damage for each Fire Energy discarded in this way.",
        },
        {
          name: "Flame Jet",
          cost: ["Fire", "Fire"],
          convertedEnergyCost: 2,
          damage: "",
          text: "Flip a coin. If heads, choose 1 of your opponent's Pokémon. This attack does 40 damage to that Pokémon. Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
        },
      ],
      weaknesses: [
        {
          type: "Water",
          value: "×2",
        },
      ],
      resistances: [
        {
          type: "Fighting",
          value: "-30",
        },
      ],
      retreatCost: ["Colorless", "Colorless", "Colorless"],
      convertedRetreatCost: 3,
      set: {
        id: "gym2",
        name: "Gym Challenge",
        series: "Gym",
        printedTotal: 132,
        total: 132,
        legalities: {
          unlimited: "Legal",
        },
        ptcgoCode: "G2",
        releaseDate: "2000/10/16",
        updatedAt: "2022/10/10 15:12:00",
        images: {
          symbol: "https://images.pokemontcg.io/gym2/symbol.png",
          logo: "https://images.pokemontcg.io/gym2/logo.png",
        },
      },
      number: "2",
      artist: "Ken Sugimori",
      rarity: "Rare Holo",
      nationalPokedexNumbers: [6],
      legalities: {
        unlimited: "Legal",
      },
      images: {
        small: "https://images.pokemontcg.io/gym2/2.png",
        large: "https://images.pokemontcg.io/gym2/2_hires.png",
      },
      tcgplayer: {
        url: "https://prices.pokemontcg.io/tcgplayer/gym2-2",
        updatedAt: "2025/01/20",
        prices: {
          unlimitedHolofoil: {
            low: 289.6,
            mid: 349.5,
            high: 550.0,
            market: 289.41,
            directLow: null,
          },
        },
      },
      cardmarket: {
        url: "https://prices.pokemontcg.io/cardmarket/gym2-2",
        updatedAt: "2025/01/20",
        prices: {
          averageSellPrice: 255.88,
          lowPrice: 59.9,
          trendPrice: 304.9,
          germanProLow: 0.0,
          suggestedPrice: 0.0,
          reverseHoloSell: 0.0,
          reverseHoloLow: 0.0,
          reverseHoloTrend: 159.26,
          lowPriceExPlus: 250.0,
          avg1: 179.63,
          avg7: 246.38,
          avg30: 263.25,
          reverseHoloAvg1: 130.0,
          reverseHoloAvg7: 120.47,
          reverseHoloAvg30: 130.94,
        },
      },
    },
    {
      id: "base6-3",
      name: "Charizard",
      supertype: "Pokémon",
      subtypes: ["Stage 2"],
      level: "76",
      hp: "120",
      types: ["Fire"],
      evolvesFrom: "Charmeleon",
      abilities: [
        {
          name: "Energy Burn",
          text: "As often as you like during your turn (before your attack), you may turn all Energy attached to Charizard into Fire Energy for the rest of the turn. This power can't be used if Charizard is affected by a Special Condition.",
          type: "Pokémon Power",
        },
      ],
      attacks: [
        {
          name: "Fire Spin",
          cost: ["Fire", "Fire", "Fire", "Fire"],
          convertedEnergyCost: 4,
          damage: "100",
          text: "Discard 2 Energy cards attached to Charizard or this attack does nothing.",
        },
      ],
      weaknesses: [
        {
          type: "Water",
          value: "×2",
        },
      ],
      resistances: [
        {
          type: "Fighting",
          value: "-30",
        },
      ],
      retreatCost: ["Colorless", "Colorless", "Colorless"],
      convertedRetreatCost: 3,
      set: {
        id: "base6",
        name: "Legendary Collection",
        series: "Other",
        printedTotal: 110,
        total: 110,
        legalities: {
          unlimited: "Legal",
        },
        ptcgoCode: "LC",
        releaseDate: "2002/05/24",
        updatedAt: "2020/08/14 09:35:00",
        images: {
          symbol: "https://images.pokemontcg.io/base6/symbol.png",
          logo: "https://images.pokemontcg.io/base6/logo.png",
        },
      },
      number: "3",
      artist: "Mitsuhiro Arita",
      rarity: "Rare Holo",
      flavorText:
        "Spits fire that is hot enough to melt boulders. Known to unintentionally cause forest fires.",
      nationalPokedexNumbers: [6],
      legalities: {
        unlimited: "Legal",
      },
      images: {
        small: "https://images.pokemontcg.io/base6/3.png",
        large: "https://images.pokemontcg.io/base6/3_hires.png",
      },
      tcgplayer: {
        url: "https://prices.pokemontcg.io/tcgplayer/base6-3",
        updatedAt: "2025/01/20",
        prices: {
          holofoil: {
            low: 319.72,
            mid: 319.73,
            high: 365.0,
            market: 319.73,
            directLow: null,
          },
          reverseHolofoil: {
            low: 2399.0,
            mid: 2749.99,
            high: 2750.0,
            market: 1199.0,
            directLow: null,
          },
        },
      },
      cardmarket: {
        url: "https://prices.pokemontcg.io/cardmarket/base6-3",
        updatedAt: "2025/01/20",
        prices: {
          averageSellPrice: 78.73,
          lowPrice: 35.0,
          trendPrice: 72.92,
          germanProLow: 0.0,
          suggestedPrice: 0.0,
          reverseHoloSell: 420.0,
          reverseHoloLow: 165.0,
          reverseHoloTrend: 792.84,
          lowPriceExPlus: 125.0,
          avg1: 55.0,
          avg7: 94.49,
          avg30: 106.5,
          reverseHoloAvg1: 420.0,
          reverseHoloAvg7: 727.84,
          reverseHoloAvg30: 800.57,
        },
      },
    },
  ],
  page: 1,
  pageSize: 3,
  count: 3,
  totalCount: 101,
};

// Fonction utilitaire pour trouver le prix le plus bas
type PriceVariant = {
  low: number;
  mid: number;
  high: number;
  market: number;
  directLow: number;
};

type Card = {
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

const getLowestMarketPrice = (
  prices: Record<string, PriceVariant>
): number | null => {
  if (!prices) return null;

  const marketPrices = Object.values(prices)
    .map((variant: PriceVariant) => variant.market)
    .filter((price): price is number => price !== undefined);

  return marketPrices.length > 0 ? Math.min(...marketPrices) : null;
};

const mapCardData = (data: any): Card[] => {
  return data.map(
    (item: any): Card => ({
      id: item.id,
      name: item.name,
      images: {
        small: item.images?.small ?? "",
      },
      set: { name: item.set.name },
      rarity: item.rarity ?? "Unknown",
      tcgplayer: {
        prices: {
          lowestMarket: getLowestMarketPrice(item.tcgplayer?.prices),
        },
      },
    })
  );
};

const CARD_DATA = mapCardData(REAL_DATA.data);

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4 rounded-lg border bg-card p-4">
        <Search className="h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Rechercher une carte..."
          className="border-none bg-transparent focus-visible:ring-0"
        />
      </div>
      <Grid cols="4" gap="4">
        {CARD_DATA.map((card: Card) => (
          <div
            key={card.id}
            className="flex flex-col gap-3 rounded-lg border bg-card p-4"
          >
            <h3 className="font-semibold">{card.name}</h3>
            <p className="text-xs text-muted-foreground">{card.set.name}</p>
            <Image
              src={card.images.small}
              alt={card.name}
              width={200}
              height={280}
              className="rounded-lg object-contain"
            />
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-medium leading-none">
                People are willing to pay $
                {card.tcgplayer?.prices?.lowestMarket ?? "N/A"}{" "}
                <TrendingUp className="h-4 w-4" />
              </div>
              <p className="text-sm text-muted-foreground">{card.rarity}</p>
            </div>
          </div>
        ))}
      </Grid>
    </div>
  );
}
