"use client";

import * as React from "react";
import { PlayingCardListSkeleton } from "../skeletons/lists/playing-card-list-skeleton";
import { useInfiniteTcgCards } from "@/hooks/fetch/pokemon-tcg-cards-hook";
import { Grid } from "../layout/grid/grid";
import { PlayingCardKpiCard } from "../cards/playing-card-kpi-card";
import { PlayingCardKpiData } from "@/types/playing-card/playing-card-type";
import {
  KpiIconTypeEnum,
  KpiTypeEnum,
} from "@/types/enums/playing-card-kpi-enum";

interface PlayingCardDetailKpiListProps {
  className: string;
}

const kpis: PlayingCardKpiData[] = [
  {
    id: "1",
    title: "Low price",
    value: 14.75,
    type: KpiTypeEnum.PRICE,
    iconType: KpiIconTypeEnum.CHART,
  },
  {
    id: "2",
    title: "Max price",
    value: 23.41,
    type: KpiTypeEnum.PRICE,
    iconType: KpiIconTypeEnum.CHART,
  },
  {
    id: "3",
    title: "Market price",
    value: 20.18,
    type: KpiTypeEnum.PRICE,
    iconType: KpiIconTypeEnum.CHART,
  },
  {
    id: "4",
    title: "Sell rate",
    value: 13,
    type: KpiTypeEnum.PERCENT,
    iconType: KpiIconTypeEnum.CHART,
  },
];

export function PlayingCardDetailKpiList({
  className,
}: PlayingCardDetailKpiListProps) {
  const { data, isLoading, error } = useInfiniteTcgCards();

  if (isLoading)
    return (
      <Grid cols={1} colsSm={2} colsMd={2} colsLg={4} gap={4}>
        <PlayingCardListSkeleton />
      </Grid>
    );

  if (!isLoading && !data?.pages[0].length)
    return (
      <div className="text-center text-2xl font-bold mt-8">No cards found</div>
    );

  if (error) return <div>An error occured</div>;

  return (
    <Grid
      className={className}
      cols={1}
      colsSm={2}
      colsMd={2}
      colsLg={4}
      gap={4}
    >
      {kpis.map((kpi) => (
        <PlayingCardKpiCard key={kpi.id} kpi={kpi} className="col-span-1" />
      ))}
    </Grid>
  );
}
