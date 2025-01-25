"use client";

import { MultiSelect } from "@/components/combobox/multi-select-combobox";
import { Input } from "@/components/ui/input";
import {
  TcgPlayerOptions,
  useFetchTcgPlayerOptions,
} from "@/hooks/fetch/pokemon-tcg-options-hook";
import { useCardFilters } from "@/hooks/filters/card-filter-hook";

import { Search } from "lucide-react";

const data = [
  { value: "base1", label: "1999 - Base" },
  { value: "base2", label: "1999 - Jungle" },
  { value: "basep", label: "1999 - Wizards Black Star Promos" },
  { value: "base3", label: "2000 - Fossil" },
  { value: "base4", label: "2000 - Base Set 2" },
  { value: "base5", label: "2000 - Team Rocket" },
  { value: "gym1", label: "2000 - Gym Heroes" },
  { value: "gym2", label: "2001 - Gym Challenge" },
  { value: "neo1", label: "2001 - Neo Genesis" },
  { value: "neo2", label: "2001 - Neo Discovery" },
  { value: "si1", label: "2002 - Southern Islands" },
  { value: "neo3", label: "2002 - Neo Revelation" },
  { value: "neo4", label: "2003 - Neo Destiny" },
];
const rarityData = [
  { value: "ACE SPEC Rare", label: "ACE SPEC Rare" },
  { value: "Amazing Rare", label: "Amazing Rare" },
  { value: "Classic Collection", label: "Classic Collection" },
  { value: "Common", label: "Common" },
  { value: "Double Rare", label: "Double Rare" },
  { value: "Hyper Rare", label: "Hyper Rare" },
  { value: "Illustration Rare", label: "Illustration Rare" },
  { value: "LEGEND", label: "LEGEND" },
  { value: "Promo", label: "Promo" },
  { value: "Radiant Rare", label: "Radiant Rare" },
  { value: "Rare", label: "Rare" },
  { value: "Rare ACE", label: "Rare ACE" },
  { value: "Rare BREAK", label: "Rare BREAK" },
  { value: "Rare Holo", label: "Rare Holo" },
  { value: "Rare Holo EX", label: "Rare Holo EX" },
  { value: "Rare Holo GX", label: "Rare Holo GX" },
  { value: "Rare Holo LV.X", label: "Rare Holo LV.X" },
  { value: "Rare Holo Star", label: "Rare Holo Star" },
  { value: "Rare Holo V", label: "Rare Holo V" },
  { value: "Rare Holo VMAX", label: "Rare Holo VMAX" },
  { value: "Rare Holo VSTAR", label: "Rare Holo VSTAR" },
  { value: "Rare Prime", label: "Rare Prime" },
  { value: "Rare Prism Star", label: "Rare Prism Star" },
  { value: "Rare Rainbow", label: "Rare Rainbow" },
  { value: "Rare Secret", label: "Rare Secret" },
  { value: "Rare Shining", label: "Rare Shining" },
  { value: "Rare Shiny", label: "Rare Shiny" },
  { value: "Rare Shiny GX", label: "Rare Shiny GX" },
  { value: "Rare Ultra", label: "Rare Ultra" },
  { value: "Shiny Rare", label: "Shiny Rare" },
  { value: "Shiny Ultra Rare", label: "Shiny Ultra Rare" },
  { value: "Special Illustration Rare", label: "Special Illustration Rare" },
  { value: "Trainer Gallery Rare Holo", label: "Trainer Gallery Rare Holo" },
  { value: "Ultra Rare", label: "Ultra Rare" },
  { value: "Uncommon", label: "Uncommon" },
];

export default function FiltersCardHeader() {
  const { data: sets, isLoading: setsLoading } = useFetchTcgPlayerOptions(
    ["sets"],
    TcgPlayerOptions.SETS
  );

  const { filters, handlers } = useCardFilters(sets ?? data, rarityData);

  const handleInputSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    handlers.setName(value);
    handlers.handleNameChange(value);
  };

  if (setsLoading) {
    return (
      <div className="flex items-center gap-4 rounded-lg border bg-card p-4">
        Chargement...
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 rounded-lg border bg-card p-4">
      <Search className="h-5 w-5 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search a card..."
        onChange={handleInputSearchChange}
        value={filters.name}
      />
      <MultiSelect
        options={sets ?? data}
        selected={filters.sets}
        onChange={handlers.handleSetsChange}
        errorMessage="No set found"
        placeholder="Select a set..."
        searchPlaceholder="Search a set..."
      />
      <MultiSelect
        options={rarityData}
        selected={filters.rarities}
        onChange={handlers.handleRaritiesChange}
        errorMessage="No set found"
        placeholder="Select a rarity..."
        searchPlaceholder="Search a rarity..."
      />
    </div>
  );
}
