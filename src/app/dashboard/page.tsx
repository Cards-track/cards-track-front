"use client";

import { MultiSelect } from "@/components/combobox/multi-select-combobox";
import { PlayingCardList } from "@/components/lists/playing-card-list";
import { Input } from "@/components/ui/input";

import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

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

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const initialName = searchParams.get("name") || "";
  const [sets, setSets] = useState<string[]>([]);
  const [rarities, setRarities] = useState<string[]>([]);
  const [name, setName] = useState(initialName);
  const handleMultiSelectSetsChange = (values: string[]) => {
    setSets(values);
  };

  const handleMultiSelectRaritiesChange = (values: string[]) => {
    setRarities(values);
  };

  // useEffect(() => {
  //   const params = new URLSearchParams(searchParams.toString());
  //   if (name) {
  //     params.set("name", name);
  //   } else {
  //     params.delete("name");
  //   }
  //   router.replace(`${pathname}?${params.toString()}`);
  // }, [name, router, pathname, searchParams]);

  // const handleInputSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;
  //   setName(value);
  // };

  const handleInputSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);

    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("name", value);
    } else {
      params.delete("name");
    }

    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4 rounded-lg border bg-card p-4">
        <Search className="h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search a card..."
          onChange={(value) => handleInputSearchChange(value)}
          value={name}
        />
        <MultiSelect
          options={data}
          selected={sets}
          onChange={handleMultiSelectSetsChange}
          errorMessage="No set found"
          placeholder="Select a set..."
          searchPlaceholder="Search a set..."
        />
        <MultiSelect
          options={rarityData}
          selected={rarities}
          onChange={handleMultiSelectRaritiesChange}
          errorMessage="No set found"
          placeholder="Select a rarity..."
          searchPlaceholder="Search a rarity..."
        />
      </div>
      <PlayingCardList />
    </div>
  );
}
