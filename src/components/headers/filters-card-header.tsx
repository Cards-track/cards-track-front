"use client";

import { MultiSelect } from "@/components/combobox/multi-select-combobox";
import { Input } from "@/components/ui/input";
import {
  TcgPlayerOptions,
  useFetchTcgPlayerOptions,
} from "@/hooks/fetch/pokemon-tcg-options-hook";
import { useCardFilters } from "@/hooks/filters/card-filter-hook";

import { Search } from "lucide-react";
import FiltersCardHeaderSkeleton from "../skeletons/headers/filters-card-header-skeleton";

export default function FiltersCardHeader() {
  const { data: sets, isLoading: setsLoading } = useFetchTcgPlayerOptions(
    ["sets"],
    TcgPlayerOptions.SETS
  );

  const { data: rarities, isLoading: raritiesLoading } =
    useFetchTcgPlayerOptions(["rarities"], TcgPlayerOptions.RARITIES);

  const { filters, handlers } = useCardFilters(sets ?? [], rarities ?? []);

  const handleInputSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    handlers.setName(value);
    handlers.handleNameChange(value);
  };

  if (setsLoading || raritiesLoading) {
    return <FiltersCardHeaderSkeleton />;
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
      {sets && (
        <MultiSelect
          options={sets}
          selected={filters.sets}
          onChange={handlers.handleSetsChange}
          errorMessage="No set found"
          placeholder="Select a set..."
          searchPlaceholder="Search a set..."
        />
      )}
      {rarities && (
        <MultiSelect
          options={rarities}
          selected={filters.rarities}
          onChange={handlers.handleRaritiesChange}
          errorMessage="No set found"
          placeholder="Select a rarity..."
          searchPlaceholder="Search a rarity..."
        />
      )}
    </div>
  );
}
