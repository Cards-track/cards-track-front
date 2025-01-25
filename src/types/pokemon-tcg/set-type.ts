interface ApiSetOption {
  id: string;
  name: string;
  releaseDate: string;
}

interface ApiSetsOptionsReponse {
  data: ApiSetOption[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}

export type { ApiSetsOptionsReponse };
