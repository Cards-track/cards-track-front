"use client";

import { useQuery } from "@tanstack/react-query";
import { Option } from "@/types/common/option-type";
import { PokemonTcgService } from "@/services/api-services/pokemon-tcg-service";
import { SetTcgMapper } from "@/mappers/pokemon-tcg/set-mapper";

export enum TcgPlayerOptions {
  SETS = "sets",
  RARITIES = "rarities",
}

export const useFetchTcgPlayerOptions = (
  queryKey: string[],
  option: TcgPlayerOptions
) => {
  const switchServiceFetchingOption = async (
    option: TcgPlayerOptions
  ): Promise<Option[]> => {
    switch (option) {
      case "sets":
        const apiSetsOptions = await PokemonTcgService.fetchSetsOptions();
        return SetTcgMapper.mapSetsOptionsData(apiSetsOptions);
      case "rarities":
        const apiRaritiesOptions = await PokemonTcgService.fetchSetsOptions();
        return SetTcgMapper.mapSetsOptionsData(apiRaritiesOptions);
      default:
        return [];
    }
  };

  return useQuery<Option[]>({
    queryKey: queryKey,
    queryFn: async () => {
      return switchServiceFetchingOption(option);
    },
  });
};
