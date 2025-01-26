import { Option } from "@/types/common/option-type";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState, useCallback, useEffect } from "react";
import { useDebounce } from "../debouce-hook";
import {
  updateFilterParam,
  validateUrlMultiOptionsParams,
} from "@/utils/url-utils";
import { PlayingCardFilterParamsEnum } from "@/types/playing-card/playing-card-filter-enum";

export const useCardFilters = (
  availableSets: Option[],
  availableRarities: Option[],
  availableTypes: Option[]
) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const urlSets = searchParams.get("sets")?.split("%") || [];
  const urlRarities = searchParams.get("rarities")?.split("%") || [];
  const urlTypes = searchParams.get("types")?.split("%") || [];

  const [isInitialized, setIsInitialized] = useState(false);
  const [sets, setSets] = useState<string[]>(urlSets);
  const [rarities, setRarities] = useState<string[]>(urlRarities);
  const [types, setTypes] = useState<string[]>(urlTypes);
  const [name, setName] = useState("");

  // Un seul useEffect pour l'initialisation
  useEffect(() => {
    const areOptionsLoaded =
      availableSets.length > 0 &&
      availableRarities.length > 0 &&
      availableTypes.length > 0;

    if (areOptionsLoaded && !isInitialized) {
      setSets(
        validateUrlMultiOptionsParams(
          searchParams.get("sets")?.split("%") || [],
          availableSets
        )
      );
      setRarities(
        validateUrlMultiOptionsParams(
          searchParams.get("rarities")?.split("%") || [],
          availableRarities
        )
      );
      setTypes(
        validateUrlMultiOptionsParams(
          searchParams.get("types")?.split("%") || [],
          availableTypes
        )
      );
      setName(searchParams.get("name") || "");
      setIsInitialized(true);
    }
  }, [
    availableSets,
    availableRarities,
    availableTypes,
    searchParams,
    isInitialized,
  ]);

  const updateUrlParams = useCallback(
    (params: URLSearchParams) => {
      router.replace(`${pathname}?${params.toString()}`);
    },
    [pathname, router]
  );

  // Handler
  const handleNameChange = useDebounce((value: string) => {
    const urlSearchParams = new URLSearchParams(searchParams.toString());
    const params = updateFilterParam(
      urlSearchParams,
      PlayingCardFilterParamsEnum.NAME,
      value
    );
    updateUrlParams(params);
  }, 300);

  const handleSetsChange = (values: string[]) => {
    setSets(values);
    const urlSearchParams = new URLSearchParams(searchParams.toString());
    const params = updateFilterParam(
      urlSearchParams,
      PlayingCardFilterParamsEnum.SETS,
      values
    );
    updateUrlParams(params);
  };

  const handleRaritiesChange = (values: string[]) => {
    setRarities(values);
    const urlSearchParams = new URLSearchParams(searchParams.toString());
    const params = updateFilterParam(
      urlSearchParams,
      PlayingCardFilterParamsEnum.RARITIES,
      values
    );
    updateUrlParams(params);
  };

  const handleTypesChange = (values: string[]) => {
    setTypes(values);
    const urlSearchParams = new URLSearchParams(searchParams.toString());
    const params = updateFilterParam(
      urlSearchParams,
      PlayingCardFilterParamsEnum.TYPES,
      values
    );
    updateUrlParams(params);
  };

  return {
    filters: { name, sets, rarities, types },
    handlers: {
      handleNameChange,
      handleSetsChange,
      handleRaritiesChange,
      handleTypesChange,
      setName,
    },
  };
};
