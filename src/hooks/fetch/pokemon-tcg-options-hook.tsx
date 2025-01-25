"use client";

import { useQuery } from "@tanstack/react-query";
import { Option } from "@/types/common/option-type";
import { PokemonTcgService } from "@/services/api-services/pokemon-tcg-service";
import { SetTcgMapper } from "@/mappers/pokemon-tcg/set-mapper";

export const useFetchTcgPlayerOptions = (queryKey: string[]) => {
  return useQuery<Option[]>({
    queryKey: queryKey,
    queryFn: async () => {
      const response = await PokemonTcgService.fetchSetsOptions();
      return SetTcgMapper.mapSetsOptionsData(response);
    },
  });
};
