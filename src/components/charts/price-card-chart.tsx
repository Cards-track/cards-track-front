"use client";

import { TrendingDown, TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useMemo } from "react";

const chartData = [
  { date: "2025/01/26", price: 14.75 },
  { date: "2025/01/27", price: 10.7 },
  { date: "2025/01/28", price: 13.85 },
  { date: "2025/01/29", price: 12.31 },
  { date: "2025/01/30", price: 17.05 },
  { date: "2025/01/31", price: 16.79 },
];

const chartConfig = {
  price: {
    label: "Price",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

interface PriceCardChartProps {
  className?: string;
}

export function PriceCardChart({ className }: PriceCardChartProps) {
  const lastTrendingPrice = useMemo(() => {
    const lastPrice = chartData[chartData.length - 1].price;
    const beforeLastPrice = chartData[chartData.length - 2].price;
    return ((lastPrice - beforeLastPrice) / beforeLastPrice) * 100;
  }, []);

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>TCG Player Price Court</CardTitle>
        <CardDescription>Price in $</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="price"
              type="natural"
              stroke="var(--color-price)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by {lastTrendingPrice.toFixed(2)}% today{" "}
          {lastTrendingPrice >= 0 ? (
            <TrendingUp className="h-4 w-4 text-green-700" />
          ) : (
            <TrendingDown className="h-4 w-4 text-red-700" />
          )}
        </div>
        <div className="leading-none text-muted-foreground">
          Showing the last 7 day
        </div>
      </CardFooter>
    </Card>
  );
}
