"use client";

import { PlayingCardDetailCard } from "@/components/cards/playing-card-detail-card";
import { PriceCardChart } from "@/components/charts/price-card-chart";
import { Grid } from "@/components/layout/grid/grid";
import { PlayingCardDetailKpiList } from "@/components/lists/playing-card-detail-kpi-list";
import { useParams } from "next/navigation";
import React from "react";

export default function CardDetailPage() {
  const { id } = useParams();
  return (
    <Grid
      className="gap-x-0 gap-y-4 lg:gap-4"
      cols={1}
      colsSm={1}
      colsMd={1}
      colsLg={5}
      gap={0}
    >
      <PlayingCardDetailCard
        cardId={id as string}
        className="col-span-full lg:col-span-2 flex flex-col justify-between"
      />
      <PriceCardChart className="col-span-full lg:col-span-3 flex flex-col justify-between" />
      <PlayingCardDetailKpiList className="col-span-5" />
    </Grid>
  );
}
