import { Option } from "@/types/common/option-type";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import { useDebounce } from "../debouce-hook";
import { validateUrlMultiOptionsParams } from "@/utils/url-utils";

export const useCardFilters = (
  availableSets: Option[],
  availableRarities: Option[]
) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const urllName = searchParams.get("name") || "";
  const urlSets = searchParams.get("sets")?.split("%") || [];
  const urlRarities = searchParams.get("rarities")?.split("%") || [];

  // Filters
  const [sets, setSets] = useState<string[]>(
    validateUrlMultiOptionsParams(urlSets, availableSets)
  );
  const [rarities, setRarities] = useState<string[]>(
    validateUrlMultiOptionsParams(urlRarities, availableRarities)
  );
  const [name, setName] = useState(urllName);

  const updateUrlParams = useCallback(
    (params: URLSearchParams) => {
      router.replace(`${pathname}?${params.toString()}`);
    },
    [pathname, router]
  );

  // Handler
  const handleNameChange = useDebounce((value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("name", value);
    } else {
      params.delete("name");
    }
    updateUrlParams(params);
  }, 300);

  const handleSetsChange = (values: string[]) => {
    setSets(values);
    const params = new URLSearchParams(searchParams.toString());
    if (values.length) {
      params.set("sets", values.join("%"));
    } else {
      params.delete("sets");
    }
    updateUrlParams(params);
  };

  const handleRaritiesChange = (values: string[]) => {
    setRarities(values);
    const params = new URLSearchParams(searchParams.toString());
    if (values.length) {
      params.set("rarities", values.join("%"));
    } else {
      params.delete("rarities");
    }
    updateUrlParams(params);
  };

  return {
    filters: { name, sets, rarities },
    handlers: {
      handleNameChange,
      handleSetsChange,
      handleRaritiesChange,
      setName,
    },
  };
};
