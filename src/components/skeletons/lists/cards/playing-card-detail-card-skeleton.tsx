import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
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
        <CardTitle>
          <Skeleton className="h-4 w-2/3 rounded-md animate-pulse" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="h-5 w-1/2 rounded-md animate-pulse" />
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <Skeleton className="w-[300px] h-[420px] rounded-lg animate-pulse" />
      </CardContent>
      <CardFooter>
        <div className="flex w-full flex-col gap-2">
          <Skeleton className="h-4 w-3/4 rounded-md animate-pulse" />
          <Skeleton className="h-4 w-1/3 rounded-md animate-pulse" />
        </div>
      </CardFooter>
    </Card>
  );
}
