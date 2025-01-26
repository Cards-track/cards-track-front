import { Option } from "@/types/common/option-type";
import { ApiTypesOptionsReponse } from "@/types/pokemon-tcg/type-type";

export class TypeTcgMapper {
  static mapTypesOptionsData = (response: ApiTypesOptionsReponse): Option[] => {
    return response.data.map((item) => ({
      value: item,
      label: item,
    }));
  };
}
