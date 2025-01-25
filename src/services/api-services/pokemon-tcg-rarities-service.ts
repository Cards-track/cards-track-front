import { config } from "@/lib/config";
import { SetTcgMapper } from "@/mappers/pokemon-tcg/set-mapper";
import { Option } from "@/types/common/option-type";
import { ApiSetsOptionsReponse } from "@/types/pokemon-tcg/set-type";

export class PokemonTcgRaritiesService {
  static async fetchSetsOptions(): Promise<ApiSetsOptionsReponse> {
    try {
      const queryParams = new URLSearchParams({
        select: "id,name,releaseDate",
        orderBy: "releaseDate",
      });

      const response = await fetch(
        `${config.pokemonTcg.baseUrl}/sets?${queryParams}`,
        {
          headers: {
            "X-Api-Key": config.pokemonTcg.apiKey ?? "",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error fetching sets options");
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching sets options:", error);
      throw error;
    }
  }

  static mapSetsOptionsResponse(data: ApiSetsOptionsReponse): Option[] {
    return SetTcgMapper.mapSetsOptionsData(data);
  }
}
