import { PlayingCardList } from "@/components/lists/playing-card-list";
import { Input } from "@/components/ui/input";

import { Search } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4 rounded-lg border bg-card p-4">
        <Search className="h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Rechercher une carte..."
          className="border-none bg-transparent focus-visible:ring-0"
        />
      </div>
      <PlayingCardList />
    </div>
  );
}
