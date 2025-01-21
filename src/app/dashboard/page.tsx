import { PlayingCardCard } from "@/components/cards/playing-card-card";
import { Grid } from "@/components/layout/grid/grid";
import { Input } from "@/components/ui/input";
import { PlayinCardTcgMapper } from "@/mappers/pokemon-tcg/playing-card-mapper";
import { PlayingCardData } from "@/types/playing-card/playing-card-type";
import { ApiCardReponse } from "@/types/pokemon-tcg/playing-card-type";
import cardsData from "@/dataset/pokemon-tcg/card-data-set.json";
import { Search } from "lucide-react";

const REAL_DATA: ApiCardReponse = cardsData;

const CARD_DATA = PlayinCardTcgMapper.mapCardData(REAL_DATA.data);

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
      <Grid cols="5" gap="4">
        {CARD_DATA.map((card: PlayingCardData) => (
          <PlayingCardCard key={card.id} card={card} />
        ))}
      </Grid>
    </div>
  );
}
