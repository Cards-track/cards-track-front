"use client";

import {
  KpiIconTypeEnum,
  KpiTypeEnum,
} from "@/types/enums/playing-card-kpi-enum";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

import { PlayingCardKpiData } from "@/types/playing-card/playing-card-type";
import { ChartNoAxesColumnIcon } from "lucide-react";
import { useMemo } from "react";

export type PlayingCardKpiCardProps = {
  kpi: PlayingCardKpiData;
  className?: string;
};

export function PlayingCardKpiCard({
  kpi,
  className,
}: PlayingCardKpiCardProps) {
  const kpiIcon = useMemo(() => {
    switch (kpi.iconType) {
      case KpiIconTypeEnum.CHART:
        return <ChartNoAxesColumnIcon size={16} />;
      default:
        return <ChartNoAxesColumnIcon size={16} />;
    }
  }, [kpi.iconType]);

  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle className="flex align-middle justify-between">
          {kpi.title}
          {kpiIcon}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          <span className="font-bold text-3xl">
            {kpi.type === KpiTypeEnum.PRICE ? "$" : ""}
            {kpi.value}
            {kpi.type === KpiTypeEnum.PERCENT ? "%" : ""}
          </span>
          <span className="leading-none text-muted-foreground">
            +20.1% from last month
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
