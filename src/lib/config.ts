export const config = {
  pokemonTcg: {
    baseUrl: process.env.NEXT_PUBLIC_POKEMON_TCG_API_URL,
    apiKey: process.env.NEXT_PUBLIC_POKEMON_TCG_API_KEY,
  },
} as const;
