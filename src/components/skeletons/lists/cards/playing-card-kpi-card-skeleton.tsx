import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function PlayingCardKpiCardSkeleton({
  className,
}: {
  className: string;
}) {
  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle className="flex align-middle justify-between">
          <Skeleton className="h-4 w-2/3 rounded-md animate-pulse" />
          <Skeleton className="h-4 w-6 rounded-md animate-pulse" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <Skeleton className="h-7 w-1/3 rounded-md animate-pulse" />
          <Skeleton className="h-3 w-2/3 rounded-md animate-pulse" />
        </div>
      </CardContent>
    </Card>
  );
}
