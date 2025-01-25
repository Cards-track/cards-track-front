"use client";

import { useQuery } from "@tanstack/react-query";
import { Option } from "@/types/common/option-type";
import { SetTcgMapper } from "@/mappers/pokemon-tcg/set-mapper";
import { PokemonTcgSetsService } from "@/services/api-services/pokemon-tcg-sets-service";
import { PokemonTcgRaritiesService } from "@/services/api-services/pokemon-tcg-rarities-service";
import { RarityTcgMapper } from "@/mappers/pokemon-tcg/rarity-mapper";

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
      case TcgPlayerOptions.SETS:
        const apiSetsOptions = await PokemonTcgSetsService.fetchSetsOptions();
        return SetTcgMapper.mapSetsOptionsData(apiSetsOptions);
      case TcgPlayerOptions.RARITIES:
        const apiRaritiesOptions =
          await PokemonTcgRaritiesService.fetchRaritiesOptions();
        return RarityTcgMapper.mapRaritiesOptionsData(apiRaritiesOptions);
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
