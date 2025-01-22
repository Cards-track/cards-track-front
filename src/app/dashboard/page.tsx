"use client";

import { MultiSelect } from "@/components/combobox/multi-select-combobox";
import { PlayingCardList } from "@/components/lists/playing-card-list";
import { Input } from "@/components/ui/input";

import { Search } from "lucide-react";
import { useState } from "react";

const data = [
  { value: "base1", label: "Base" },
  { value: "base2", label: "Jungle" },
  { value: "basep", label: "Wizards Black Star Promos" },
  { value: "base3", label: "Fossil" },
  { value: "base4", label: "Base Set 2" },
  { value: "base5", label: "Team Rocket" },
  { value: "gym1", label: "Gym Heroes" },
  { value: "gym2", label: "Gym Challenge" },
  { value: "neo1", label: "Neo Genesis" },
  { value: "neo2", label: "Neo Discovery" },
  { value: "si1", label: "Southern Islands" },
  { value: "neo3", label: "Neo Revelation" },
  { value: "neo4", label: "Neo Destiny" },
];

export default function Home() {
  const [sets, setSets] = useState<string[]>([]);
  const handleMultiSelectChange = (values: string[]) => {
    setSets(values);
    alert(values);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4 rounded-lg border bg-card p-4">
        <Search className="h-5 w-5 text-muted-foreground" />
        <Input type="search" placeholder="Search a card..." />
        <MultiSelect
          options={data}
          selected={sets}
          onChange={handleMultiSelectChange}
          errorMessage="Error occured"
          placeholder="Select a set..."
        />
      </div>
      <PlayingCardList />
    </div>
  );
}
