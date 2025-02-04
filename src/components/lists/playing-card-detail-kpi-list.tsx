"use client";

import * as React from "react";
import { PlayingCardListSkeleton } from "../skeletons/lists/playing-card-list-skeleton";
import { useInfiniteTcgCards } from "@/hooks/fetch/pokemon-tcg-cards-hook";
import { Grid } from "../layout/grid/grid";
import { ChartNoAxesColumnIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface PlayingCardDetailKpiListProps {
  className: string;
}

const kpis = [
  {
    id: 1,
    title: "Low price",
    value: 14.75,
    type: "price",
    icon: <ChartNoAxesColumnIcon size={16} />,
  },
  {
    id: 2,
    title: "Low price",
    value: 14.75,
    type: "price",
    icon: <ChartNoAxesColumnIcon size={16} />,
  },
  {
    id: 3,
    title: "Low price",
    value: 14.75,
    type: "price",
    icon: <ChartNoAxesColumnIcon size={16} />,
  },
  {
    id: 4,
    title: "Low price",
    value: 14.75,
    type: "price",
    icon: <ChartNoAxesColumnIcon size={16} />,
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
        <Card key={kpi.id} className="col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="flex align-middle justify-between">
              {kpi.title}
              {kpi.icon}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col">
              <span className="font-bold text-3xl">${kpi.value}</span>
              <span className="leading-none text-muted-foreground">
                +20.1% from last month
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
}
