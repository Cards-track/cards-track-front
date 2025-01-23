import { Option } from "@/types/common/option-type";

export const validateUrlMultiOptionsParams = (
  values: string[],
  options: Option[]
) => {
  return values.filter((value) =>
    options.some((option) => option.value === value)
  );
};
