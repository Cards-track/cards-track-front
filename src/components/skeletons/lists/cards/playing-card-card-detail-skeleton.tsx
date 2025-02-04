import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function PlayingCardDetailCardSkeleton({
  className,
}: {
  className: string;
}) {
  return (
    <Card className={className}>
      <CardHeader>
        {/* Title et Description Skeleton */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-2/3 rounded-md animate-pulse" />
          <Skeleton className="h-3 w-1/2 rounded-md animate-pulse" />
        </div>
      </CardHeader>
      <CardContent className="flex justify-center">
        {/* Image Skeleton */}
        <Skeleton className="w-[300px] h-[420px] rounded-lg animate-pulse" />
      </CardContent>
      <CardFooter>
        {/* Prix et Rareté Skeleton */}
        <div className="flex w-full flex-col gap-2">
          <Skeleton className="h-4 w-3/4 rounded-md animate-pulse" />
          <Skeleton className="h-3 w-1/3 rounded-md animate-pulse" />
        </div>
      </CardFooter>
    </Card>
  );
}
