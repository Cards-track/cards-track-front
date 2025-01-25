import { Option } from "@/types/common/option-type";
import { ApiRaritiesOptionsReponse } from "@/types/pokemon-tcg/rarity-type";

export class RarityTcgMapper {
  static mapRaritiesOptionsData = (
    response: ApiRaritiesOptionsReponse
  ): Option[] => {
    return response.data.map((item) => ({
      value: item,
      label: item,
    }));
  };
}
