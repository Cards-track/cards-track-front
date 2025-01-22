import { config } from "@/lib/config";
import { PlayinCardTcgMapper } from "@/mappers/pokemon-tcg/playing-card-mapper";
import { PlayingCardData } from "@/types/playing-card/playing-card-type";
import { ApiCardReponse } from "@/types/pokemon-tcg/playing-card-type";

export class PokemonTcgService {
  static async fetchCards(
    { pageParam = 1 },
    name: string
  ): Promise<ApiCardReponse> {
    let url = `${config.pokemonTcg.baseUrl}/cards?pageSize=10&page=${pageParam}&select=id,name,rarity,set,tcgplayer,images`;

    if (name) {
      url += `&q=name:${name}*`;
    }

    const response = await fetch(url, {
      headers: {
        "X-Api-Key": config.pokemonTcg.apiKey ?? "",
      },
    });

    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des cartes");
    }

    return await response.json();
  }

  static mapResponse(data: ApiCardReponse): PlayingCardData[] {
    return PlayinCardTcgMapper.mapCardData(data);
  }
}
