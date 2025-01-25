import { Option } from "@/types/common/option-type";
import { PlayingCardFilterParamsEnum } from "@/types/playing-card/playing-card-filter-enum";

export const validateUrlMultiOptionsParams = (
  values: string[],
  options: Option[]
) => {
  return values.filter((value) =>
    options.some((option) => option.value === value)
  );
};

export const updateFilterParam = (
  params: URLSearchParams,
  paramName: PlayingCardFilterParamsEnum,
  values: string | string[]
) => {
  if (Array.isArray(values)) {
    if (values.length) {
      params.set(paramName, values.join("%"));
    } else {
      params.delete(paramName);
    }
  } else {
    if (values) {
      params.set(paramName, values);
    } else {
      params.delete(paramName);
    }
  }
  return params;
};
