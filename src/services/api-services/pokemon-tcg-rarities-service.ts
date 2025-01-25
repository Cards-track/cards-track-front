import { config } from "@/lib/config";
import { RarityTcgMapper } from "@/mappers/pokemon-tcg/rarity-mapper";
import { Option } from "@/types/common/option-type";
import { ApiRaritiesOptionsReponse } from "@/types/pokemon-tcg/rarity-type";

export class PokemonTcgRaritiesService {
  static async fetchRaritiesOptions(): Promise<ApiRaritiesOptionsReponse> {
    try {
      const response = await fetch(`${config.pokemonTcg.baseUrl}/rarities`, {
        headers: {
          "X-Api-Key": config.pokemonTcg.apiKey ?? "",
        },
      });

      if (!response.ok) {
        throw new Error("Error fetching rarities options");
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching rarities options:", error);
      throw error;
    }
  }

  static mapRaritiesOptionsResponse(data: ApiRaritiesOptionsReponse): Option[] {
    return RarityTcgMapper.mapRaritiesOptionsData(data);
  }
}
