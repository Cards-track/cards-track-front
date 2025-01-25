import { Option } from "@/types/common/option-type";
import { ApiSetsOptionsReponse } from "@/types/pokemon-tcg/set-type";

export class SetTcgMapper {
  static mapSetsOptionsData = (response: ApiSetsOptionsReponse): Option[] => {
    return response.data.map((item) => ({
      value: item.id,
      label: this.getLabel(item.name, item.releaseDate),
    }));
  };

  protected static getLabel = (name: string, releaseDate: string): string => {
    const year = new Date(releaseDate).getFullYear();
    return `${year} - ${name}`;
  };
}
