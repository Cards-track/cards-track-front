import { config } from "@/lib/config";
import { TypeTcgMapper } from "@/mappers/pokemon-tcg/type-mapper";
import { Option } from "@/types/common/option-type";
import { ApiTypesOptionsReponse } from "@/types/pokemon-tcg/type-type";

export class PokemonTcgTypesService {
  static async fetchTypesOptions(): Promise<ApiTypesOptionsReponse> {
    try {
      const response = await fetch(`${config.pokemonTcg.baseUrl}/types`, {
        headers: {
          "X-Api-Key": config.pokemonTcg.apiKey ?? "",
        },
      });

      if (!response.ok) {
        throw new Error("Error fetching types options");
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching types options:", error);
      throw error;
    }
  }

  static mapTypesOptionsResponse(data: ApiTypesOptionsReponse): Option[] {
    return TypeTcgMapper.mapTypesOptionsData(data);
  }
}
