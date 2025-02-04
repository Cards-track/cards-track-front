import { config } from "@/lib/config";
import { PlayinCardTcgMapper } from "@/mappers/pokemon-tcg/playing-card-mapper";
import {
  PlayingCardData,
  PlayingCardDetailData,
} from "@/types/playing-card/playing-card-type";
import {
  ApiCard,
  ApiCardDetailReponse,
  ApiCardReponse,
} from "@/types/pokemon-tcg/playing-card-type";

// Ajout des fonctions utilitaires
const buildOrQuery = (field: string, values: string[]): string => {
  if (!values.length) return "";
  return `(${values.map((value) => `${field}:"${value}"`).join(" OR ")})`;
};

const buildSearchQuery = (
  name: string = "",
  sets: string[] = [],
  rarities: string[] = [],
  types: string[] = []
): string => {
  const queries: string[] = [];

  if (name) queries.push(`name:${name}*`);

  const setsQuery = buildOrQuery("set.id", sets);
  if (setsQuery) queries.push(setsQuery);

  const raritiesQuery = buildOrQuery("rarity", rarities);
  if (raritiesQuery) queries.push(raritiesQuery);

  const typesQuery = buildOrQuery("types", types);
  if (typesQuery) queries.push(typesQuery);

  return queries.join(" ");
};

export class PokemonTcgCardsService {
  static async fetchCards({
    page = 1,
    pageSize = 12,
    name = "",
    sets = [],
    rarities = [],
    types = [],
  }: {
    page?: number;
    pageSize?: number;
    name?: string;
    sets?: string[];
    rarities?: string[];
    types?: string[];
  }): Promise<ApiCardReponse> {
    try {
      const searchQuery = buildSearchQuery(name, sets, rarities, types);

      const queryParams = new URLSearchParams({
        page: page.toString(),
        pageSize: pageSize.toString(),
        select: "id,name,rarity,set,tcgplayer,images",
        ...(searchQuery && { q: searchQuery }),
      });

      const response = await fetch(
        `${config.pokemonTcg.baseUrl}/cards?${queryParams}`,
        {
          headers: {
            "X-Api-Key": config.pokemonTcg.apiKey ?? "",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des cartes");
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching cards:", error);
      throw error;
    }
  }

  static async fetchCardDetails(id: string): Promise<ApiCard> {
    try {
      const response = await fetch(`${config.pokemonTcg.baseUrl}/cards/${id}`, {
        headers: {
          "X-Api-Key": config.pokemonTcg.apiKey ?? "",
        },
      });

      if (!response.ok) {
        throw new Error("Error fetching card detail");
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching card detail:", error);
      throw error;
    }
  }

  static mapCardResponse(data: ApiCardReponse): PlayingCardData[] {
    return PlayinCardTcgMapper.mapCardData(data);
  }

  static mapCardDetailResponse(
    data: ApiCardDetailReponse
  ): PlayingCardDetailData {
    return PlayinCardTcgMapper.mapCardDetailData(data);
  }
}
