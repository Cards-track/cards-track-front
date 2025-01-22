"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { PokemonTcgService } from "@/services/api-services/pokemon-tcg-service";
import { PlayinCardTcgMapper } from "@/mappers/pokemon-tcg/playing-card-mapper";

export function useInfiniteTcgCards() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    rootMargin: "0px 0px -0px 0px",
  });

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["cards"],
    queryFn: PokemonTcgService.fetchCards,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.data.length === 0) return undefined;
      return allPages.length + 1;
    },
    select: (data) => {
      return {
        pages: data.pages.map((page) => PlayinCardTcgMapper.mapCardData(page)),
        pageParams: data.pageParams,
      };
    },
  });

  useEffect(() => {
    console.log(error);
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage, error]);

  return {
    data,
    isLoading,
    error,
    ref,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
}
